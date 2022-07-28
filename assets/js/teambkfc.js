AOS.init();



const teambkfccards = document.querySelector(".teambkfc-cards");
const bkfc = [
  {
    title: "Bách Khoa Fan Club",
    cardImage: "assets/images/teambkfc-page/teammm.jpg",
    place:"",
    time: "",
    desp: "BKFC - CHV được ra đời với sứ mệnh mang đến những thông tin tuyển sinh đúng đắn cho các em học sinh, giúp các em hiểu và có cái nhìn thực tế hơn về Đại học Bách Khoa, đồng thời gắn kết các thế hệ cựu học sinh THPT cùng học Bách Khoa với nhau và lan toả ngọn lửa nhiệt huyết cũng như tình yêu Bách Khoa đến mọi miền đất nước",
  },
  {
    title: "Đặc biệt là tại <b>THPT Chuyên Hùng Vương - Gia Lai</b>",
    cardImage: "assets/images/teambkfc-page/chv.jpg",
    place: "",
    time: "",
    desp: "----------text here------------",
  },

];

const showCards2 = () => {
  let output = "";
  bkfc.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  teambkfccards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);




