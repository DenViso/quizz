import axios from "axios";


const getCategory = async () => {
 const response = await axios.get(
   "https://opentdb.com/api_category.php"
 )
 return response.data.trivia_categories;
}
export default getCategory;