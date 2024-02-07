const request = async (url = '', requestObj = {}, dataType = '', errorMsg = null) => {

    url = `${url}/${dataType}`;
    let data;

    try {

        data = await fetch(url, requestObj);
        if (!data.ok) throw Error('Did not receive data -  please reload the page')
       

    } catch (err) {
        errorMsg = err.msg;
        console.log(errorMsg);
    } finally {
        return [data, errorMsg];
    }

}

export default request;