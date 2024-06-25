
const header = document.querySelector(".header");
const headerBox = `<div class="header_container">
<ul class="menu">
<li class="logo"><a href="#" class="logo-a"><img id="1" alt=""></a></li>
<li><a href="">HOME</a></li>
<li><a href="">GALLERY</a></li>
<li><a href="">PRODUCTS</a></li>
<li><a href="">REVIEW</a></li>
<li><a href="">SUPPORT</a></li>
<li><button class="search"><img id="2"></button></li>
</ul>
<div class="header_info">
<h3>Representing Drone Light </h3>
<p>Look up the sky and beautiful world with simple navigation. <br>
    Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
<a href="#">GET NOW</a>
<img class="bigDrone" id="3">
</div>
</div>`;
header.insertAdjacentHTML("afterbegin", headerBox);
