import { logger } from "firebase-functions";
import { db } from "./admin";

/**
 * Reads a document's data from Firestore given the documentName and collection
 *
 * @param collection - Name of collection (e.g. cart)
 * @param documentName - Name of the document. Name can be of the format "<collection>/<document>_<revision>", "<collection>/<document>", "<document>_<revision>", or "<document>". If no revision is provided, the latest revision will be returned.
 * @returns Contents of the document
 * @author Darvesh Gorhe
 */
export const readDocument = async (collection: string, documentName: string) => {
    let querySnapshot;
    let data;

    try {
        querySnapshot = await db.collection(collection).orderBy("metadata.timestamp", "desc").limit(1).get();
        data = await querySnapshot.docs[0].data();
        return data;
    } catch (error) {
        logger.error(error.message);
        logger.error(error.stack);
        throw error;
    }
};

/**
 * Writes a document's data to Firestore given the collection and data and optionally the document name
 *
 * @param collection - Name of collection (e.g. cart)
 * @param data - Contents to be written to Firestore
 * @author Darvesh Gorhe
 */
export const writeDocument = async (collection: string, data: any, documentName?: string) => {
    if (documentName === undefined) {
        // TODO: Add logic to create a new document in the collection if no document name is passed in
    } else {
        db.collection(collection).doc(documentName).set(data);
        console.log("Successfully wrote data for " + documentName + " in collection: " + collection);
    }
};
