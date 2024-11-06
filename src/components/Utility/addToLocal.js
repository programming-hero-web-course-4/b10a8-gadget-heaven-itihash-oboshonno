const theCartIdHolder = () => {
    const storedListStr = localStorage.getItem('cart'); // add kora string ta nilam local theke
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr); // string ta ke abar json obj banalam
        return storedList;
    } else {
        return [];
    }
}

const addingIdToReadList = (id) => {
    const existingList = theCartIdHolder();
    existingList.push(id);
    const storedListStr = JSON.stringify(existingList);
    localStorage.setItem('cart', storedListStr);
    alert("Item Added to your Cart")
}

const theWishListIdHolder = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addingIdtoWishList = (id) => {
    const existingList = theWishListIdHolder();
    if (existingList.includes(id)) {
        alert("This product already exists in your Wishlist!");
    } else {
        existingList.push(id);
        const storedListStr = JSON.stringify(existingList);
        localStorage.setItem('wish-list', storedListStr);
        alert("Added Item to your Wishlist")
    }
    
}


export { addingIdToReadList, addingIdtoWishList, theCartIdHolder, theWishListIdHolder }