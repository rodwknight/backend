import z from "zod"
import { FastifyTypeInstance } from "../types"
import { randomUUID } from "crypto"
import soap from 'soap'
import fs from 'fs'
import path from 'path'
import { SignedXml } from 'xml-crypto'

interface User {
    id: string
    name: string
    email: string
}

// Função para assinar o XML
function signXML(xml: string, certPath: string, keyPath: string) {
    const key = fs.readFileSync(keyPath, 'utf-8');
    const cert = fs.readFileSync(certPath, 'utf-8');

    const sig = new SignedXml({
        privateKey: key,
        publicCert: cert,
        signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256', // ou outro algoritmo suportado
        canonicalizationAlgorithm: 'http://www.w3.org/2001/10/xml-exc-c14n#',
        inclusiveNamespacesPrefixList: ['#default', 'ds'],
    });

    // Adicionando a referência ao XML
    sig.addReference({
        xpath: "//*[local-name(.)='infNFe']",
        transforms: ['http://www.w3.org/2000/09/xmldsig#enveloped-signature'],
        digestAlgorithm: 'http://www.w3.org/2001/04/xmlenc#sha256',
        inclusiveNamespacesPrefixList: ['#default', 'ds'],
    });

    sig.keyInfoAttributes = {
        'X509Data': `<X509Certificate>${cert.replace(/-----BEGIN CERTIFICATE-----|-----END CERTIFICATE-----|\n/g, '')}</X509Certificate>`
    };

    sig.computeSignature(xml);
    return sig.getSignedXml();
}

const users: User[] = []

export async function routes(app: FastifyTypeInstance) {

    app.get('/users', {
        schema: {
            tags: ['users'],
            description: 'List users'
        }
    }, () => {
        return []
    })

    app.post('/users', {
        schema: {
            description: 'Create a new user',
            body: z.object({
                name: z.string(),
                email: z.string().email()
            })
        }
    }, (request, reply) => {
        const { name, email } = request.body

        users.push({
            id: randomUUID(),
            name,
            email
        })

        return reply.status(201).send()
    })

}