// 劳务查询
function lwQuery(card) {
    var cardNo = card.value.trim();
    if (cardNo.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }
    var url = "http://58.210.236.152/mrkcominfo/chk_id.php?key=o-hr&id=" + cardNo;
    window.open(url);
}

// 体检查询
function tjQuery(idCard, tjCard) {
    var idCard = idCard.value.trim();
    var tjCard = tjCard.value.trim();

    if (idCard.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }

    if (tjCard.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }

    var url = "http://tj.sipcdc.com/TJCX/TJQuery?sfzh=" + idCard + "&tjbh=" + tjCard;
    window.open(url)
}

// 健康证查询
function jkzQuery(idCard, jkzCard) {
    var idCard = idCard.value.trim();
    var jkzCard = jkzCard.value.trim();

    if (idCard.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }

    if (jkzCard.length <= 0) {
        alert("请输入内容后查询 ...");
        return;
    }

    var url = "http://tj.sipcdc.com/TJCX/JKZQuery?sfzh=" + idCard + "&tjbh=" + jkzCard;
    window.open(url)
}