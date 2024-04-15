let phonePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve({phone: "iphone"});
    } else {
        reject("Phone not found");
    }
});

iphonePromise 

    .then (phone) => {
        console.log()
    }