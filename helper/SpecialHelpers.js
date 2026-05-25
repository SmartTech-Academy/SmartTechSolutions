
// function to use regular expression to extract the numbers at the end of a string like this "How-to-Analyze-Your-Best-SEO-6754"
export function extractNumbersFromString(str){
    if(str){
        // Match digits at the end of the string
        const match = str.match(/\d+$/); 
        // Return the matched number or null if not found
        return match ? match[0] : null;  
    }else{
        return 0;
    }
};

