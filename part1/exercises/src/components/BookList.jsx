export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSs-vpoYJgdk4j6zt2qPPib6CxdPAZZqWtyFtgRiIqvF37bt_jumjgILWfThX_Q9wbouWt_BAt_93DlXPeHAchmb1YXXTKdhDIWL1UZFR3lM8UZf5_xTYM&usqp=CAc";
   let book2 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKuubCg9CII1c3VgFcbmelEW4JQ5Gj4lsjTmOoj_31qauDJqeGJyN_S_pwDTs1MoqbgAZSWCfbOoYLFWElEh3UtFJt7NOf8GF6OHDOV6zU&usqp=CAc";
   let book3 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcwO6gSY-Enz6jQ8g8jdHfznYri9b_0q9jq5IUBKCUIAK7MMbYY8HqoFTqzHoKEaJqz0U_QHy1J1rzUOIIij8kxGUK8K54cgWs3Wyls8o&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Power of Moments by Chip & Dan Heath" />
         <img src={book2} alt="The Lost Bookshop by Evie Woods" />
         <img src={book3} alt="How High We Go in the Dark by Sequoia Nagamatsu" />
      </div>      
   );
}