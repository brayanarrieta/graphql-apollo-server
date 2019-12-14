import mongoose from 'mongoose';
import { Clients } from './db';

export const resolvers = {
    Query: {
        getClients: (root, { limit }) => Clients.find({}).limit(limit),
        getClient: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Clients.findById(id, (error, client) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(client);
                    }
                });
            });
        },
    },
    Mutation: {
        createClient: (root, { input }) => {
            const newClient = new Clients({
                name: input.name,
                lastname: input.lastname,
                company: input.company,
                emails: input.emails,
                age: input.age,
                type: input.type,
                orders: input.orders,
            });

            newClient.id = newClient._id;

            return new Promise((resolve, reject) => {
                newClient.save((error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(newClient);
                    }
                });
            });
        },
        updateClient: (root, { input }) => {
            return new Promise((resolve, reject) => {
                Clients.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, client) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(client);
                    }
                });
            });
        },
        deleteClient: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Clients.findOneAndRemove({ _id: id }, (error) => {
                    if (error) reject(error)
                    else resolve("Client deleted successfully.")
                });
            });
        }
    },

};