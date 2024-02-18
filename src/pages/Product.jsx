const Product = () => {
  return (
    <div className=" bg-cyan-800 text-cyan-100 w-full h-screen py-[1px]">
      <section className="flex items-center justify-center gap-16 h-full mt-20">
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
          className="max-w-sm"
        />
        <div className="max-w-lg">
          <h2 className="text-5xl mb-8">About WorldWide.</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Product;
