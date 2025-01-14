import { create } from 'xmlbuilder2';
import { NfeData } from '../interfaces/nfe-data';
import { xml } from '../shared/mock/xml'

let nfeData: NfeData

// Dados da NF-e
nfeData = xml

// Criando o XML com xmlbuilder2
const doc = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('NFe', nfeData)
    .end({ prettyPrint: true });

// Exibindo o XML gerado
console.log(doc);