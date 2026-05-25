
// Bring into utility.js file all functions inside helpers.js file.
// import * as helper from "@/helper/Helpers";
import { COUNT } from "@/helper/Helpers";


// Quickly Export the imported helper functions, so that via the utility our components can access helpers.js functions without needing to import both files in the app.
export { COUNT };



// function to manipulate the url of images, just incase app wants to load images from a cdn
export function image_url(url, take_from_remote_location = false){
    return url;
    // return `/public${url}`;
}


// run strings that are having html tags in them, as if they are html documents
export function dangerouslySetInnerHTML(string_info_as_html){
    return (<div dangerouslySetInnerHTML={{ __html: string_info_as_html }} />);
}



// Function to be used top control the numbers of years of experience the company holds. This function is used to make this count dynamic and the 
// function starts getting offsets from 2025 where it returns zero, 2026 it would return one, and continuously in this fashion. Hence if in 2025 SmartTech
// said to have 5 years experience in app dev and 7 in web dev, this figure will be added to the output of this function, and will still return 5 and 7 years
// experience respectively, but if the year is 2026, once the 5 and 7 years experience is added to the output of this function we will have a new count, to be
// 6 and  8 respectively. This is how this function will be used to make this year count dynamic.
export function getYearOffset(current_claimed_year_number) {
    // Get current year
    const currentYear = new Date().getFullYear(); 
    // Calculate base offset
    const offset = currentYear >= 2025 ? currentYear - 2025 : null; 

    // Handle years before 2025
    if (offset === null) return "Invalid year"; 

    // Convert the final result to string
    return String(offset + current_claimed_year_number); 
}

