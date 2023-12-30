fetch('./image.blob:https://app.100xdevs.com/37349582-5ba7-456c-b1e7-f1d60bdc3eb6')
    .then((res) => res.blob())
    .then((myBlob) => {
        console.log(myBlob);
        // logs: Blob { size: 1024, type: "image/jpeg" }
    });