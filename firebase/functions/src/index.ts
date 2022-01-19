import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import { _echoMessage } from "./operations";
export const echoMessage = functions.https.onCall(_echoMessage);
