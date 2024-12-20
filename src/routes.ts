import z from "zod";
import { FastifyTypeInstance } from "./types";
import { randomUUID } from "crypto";

interface User {
    id: string
    name: string
    email: string
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