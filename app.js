document.getElementById('conversionForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const sourceCode = document.getElementById('sourceCode').value;
    const sourceSite = document.getElementById('sourceSite').value;
    const targetSite = document.getElementById('targetSite').value;

    const response = await fetch('http://localhost:3000/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sourceCode, sourceSite, targetSite })
    });

    const data = await response.json();
    document.getElementById('result').innerText = data.convertedCode;
});

