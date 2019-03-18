function fun() {
    if (confirm("你今年多少岁？")) {
        document.getElementById("message").innerText = "我想看见她哭笑不得？"
    }else{
        document.getElementById('message').innerText = "那你就笑吧，有一天我笑给你看。"
    }
}