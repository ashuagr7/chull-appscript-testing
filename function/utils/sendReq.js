
class SendReq {
    static async send(id, method, action, body) {
        let url = 'http://167.71.238.72:6000/'
        console.log(url);
          try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'), // assuming the token is stored in localStorage
                },
                action: action,
                entityId: id,
                data: body
            });
            console.log(response);
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`API Request Failed: ${text}`);
            }
            

            return await response.json();
        } catch (error) {
            console.error("Error making API request:", error);
            return null;
        }
    }
}