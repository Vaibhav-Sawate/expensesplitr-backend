Since you are using GitHub Codespaces (I saw your URL earlier), you have a bigger problem than CORS.

Your browser is at https://expert-palm-tree..., but you are trying to talk to http://localhost:5000.

Mixed Content: HTTPS cannot talk to HTTP.

Wrong Address: "Localhost" on your browser refers to YOUR laptop, but the server is running in the Cloud.

We need to trick the browser using a Proxy.

Update frontend/src/pages/Register.jsx:

Find the axios.post line and remove the domain.

Old: axios.post('http://localhost:5000/api/users', formData)

New: axios.post('/api/users', formData)