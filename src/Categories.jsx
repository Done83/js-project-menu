const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="btn"
            type="button"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
