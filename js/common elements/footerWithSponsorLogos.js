const footer = document.createElement('footer');

footer.innerHTML = `
    <div class="sponsors">
        <img src="sponsors_logo/sponsor_1.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_2.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_3.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_4.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_5.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_6.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_7.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_8.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_9.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_10.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_11.png" width="100px" alt="sponsors">
        <img src="sponsors_logo/sponsor_12.png" width="100px" alt="sponsors">
    </div>
    <div class="borderline"></div>
    <div class="socials">
        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href=""><i class="fa-brands fa-tiktok"></i></a>
    </div>
`;

document.body.insertBefore(
    footer,
    document.querySelector('script')
);