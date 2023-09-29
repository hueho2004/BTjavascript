var men = [
    {
        id:1, 
        name: "The Cosmo",
        code: "TC1025001BA",
        price: "250.000",
        image: "https://dony.vn/wp-content/uploads/2021/08/quan-jean-nam-dep-ban-chay-10.jpg",
    },
    {
        id:2, 
        name: "Quần baggy ",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://dony.vn/wp-content/uploads/2021/08/quan-jean-nam-dep-ban-chay-3.jpg",
    },
    {
        id:3, 
        name: "Quần short kaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-PGwllEXf730Z_Zs62nDVCS-lsgkzIVdjSA6CltvQA96dtuBAX2NUcu3vMBT0oanEPM&usqp=CAU",
    },
    {
        id:4, 
        name: "short kaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://down-vn.img.susercontent.com/file/1b98c7036ffbbc68e4fda88685c8ba11"
    },
];

var woment = [
    {
        id:1, 
        name: "áo sơ mi nữ",
        code: "TC1025001BA",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_IHaTMRl85OtGCIpyBMKrHSlNC4XNJgw-w&usqp=CAU"
    },
    {
        id:2, 
        name: "váy dài",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://khohangsilami.vn/wp-content/uploads/2020/09/Quan-jean-nu-dai-ong-rong-tre-trung.jpg"
    },
    {
        id:3, 
        name: "váy công sở",
        code: "TC1025001BA",
        price: "300.000",
        image: "https://cf.shopee.vn/file/4b8c557066ab18785427b18e2131256a"
    },
    {
        id:4, 
        name: "Áo đẹp",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://imgs.vietnamnet.vn/Images/2017/09/10/13/20170910134007-quan-jeans-nu-1.jpg"
    },
];

function listProducts() {
    for (let i=0; i<= men.length-1; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem; ">';
    demo += '<img src="'+men[i].image+'" class="card-img-top" style="height:300px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">'+men[i].name+'</h5>';
    demo += '<p class="card-text">'+men[i].price+'</p>';
    demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>'
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';
    console.log(demo);
    document.getElementById("men").innerHTML += demo;
    }
    for (let i=0; i<= woment.length-1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="'+woment[i].image+'" class="card-img-top" style="height:300px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>'
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}
function oder(){
    alert("Đặt hàng thành công");
}

