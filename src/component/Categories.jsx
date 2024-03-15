import Category from "./Category";


function Categories({categories}) {
  return (
    <div>
      {categories.map((cat, i) => (
        <Category key={i} cat={cat} i={i} />
      ))}
    </div>
  );
}

export default Categories;
