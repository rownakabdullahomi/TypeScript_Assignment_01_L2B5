function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  };
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    let result : { title: string; rating: number }[] = [];
    for (const item of items) {
        if(item.rating >= 4){
            result.push(item);
        }
    }
    return result;
}
