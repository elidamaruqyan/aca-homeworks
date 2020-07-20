const frameworks = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" }
];
const findById = (source, id) =>{
    for(let i = 0; i < source.length; i++){
        if(source[i].id === id){
            return source[i];
        }
    }
    return "No Data"
};

findById(frameworks, 3);  // { id: 3, title: "vue" }