const host = '';

const url = {
    getUserInfo:'/sale/center/get_info',
    
};

for (var key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key];
    }
}

export default url

