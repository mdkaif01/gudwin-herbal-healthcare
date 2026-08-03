import axios from "axios";
import { BACKEND_URL } from "../config";

export async function createConsultation(data) {
  const response = await axios.post(
    `${BACKEND_URL}/api/consultations`,
    data
  );

  return response.data;
}