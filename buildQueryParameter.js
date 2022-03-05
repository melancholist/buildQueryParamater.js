export default buildQueryParameter = (queryMap) => {
    var queryBuilder = [];
    const lastItem = Array.from(queryMap).pop();
    queryMap.forEach(function(value, key, map){
        var queryParam = key + "=" + value;
        if(map.size > 1 && !lastItem.includes(key && value)){
            queryParam += "&";
        }
        queryBuilder.push(queryParam);
    });
    return queryBuilder.join("");
}