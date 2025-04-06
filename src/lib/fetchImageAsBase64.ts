import axios from 'axios';

export async function fetchImageAsBase64(url: string): Promise<string> {
    const response = await axios.get<ArrayBuffer>(url, {
        responseType: 'arraybuffer',
    });

    const contentType = response.headers['content-type'] || 'image/jpeg';
    const base64 = Buffer.from(response.data).toString('base64');
    return `data:${contentType};base64,${base64}`;
}
