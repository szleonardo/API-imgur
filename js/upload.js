var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        // document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
           '<br>' + 'Clique em Copiar e após Ctrl + V : ' + '<br><input readonly id="inputTest" class="form-control form-control-sm image-url" value=\"' + get_link + '\"/>' +'<br>'+ '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
    }
};

new Imgur({
    clientid: 'db757208d4a84eb',
    callback: feedback
});