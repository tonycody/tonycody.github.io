function query(card) {
    var cardNo = card.value.trim();
    if (cardNo.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }
    var url = "http://58.210.236.152/mrkcominfo/chk_id.php?key=o-hr&id=";
    url = url + cardNo;
    window.open(url);
}