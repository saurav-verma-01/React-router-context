const Pricing = () => {
  return (
    <div className=" bg-orange-800 text-orange-100 w-full h-screen py-[1px]">
      <section className="w-full h-full  flex items-center justify-center gap-8 mt-20">
        <div className="max-w-md">
          <h2 className="text-5xl mb-8">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
          className="max-w-sm"
        />
      </section>
    </div>
  );
};

export default Pricing;
