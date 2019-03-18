function fun() {
    if (confirm("你喜欢笑我吗？")) {
        document.getElementById("message").innerText = "那你就笑吧，有一天我笑给你看。"
    } else {
        document.getElementById('message').innerText = "恭喜你，算你还识相？"
    }
}