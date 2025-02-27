export default function About() {
  return (
    <section className="lg:pt-25 pt-15">
        <div className="container">
          <div className="lg:w-[80%] w-full text-center mx-auto bg-black-200 lg:py-[70px] lg:px-20 py-10 px-10 lg:rounded-[40px] rounded-[30px] fadeInUp"
            data-delay="0.2">
            <h3 className="md:text-3xl md:leading-[48px] text-2xl leading-9 text-white">Designpro took my billion-dollar
              baby idea, slapped their
              design magic on it, and boom
              –<span className="text-primary">branding so good it makes my other ventures look like lemonade
                stands.</span>Twist
              isn't just a design agency; they're your ticket to the big leagues.</h3>
            <div className="pt-12.5 flex flex-col items-center">
              <img src="assets/images/about/founder.png" alt="founder" title="founder"
                className="w-20 h-20 rounded-full" />
              <h2 className="pt-2.5 lg:text-3xl text-2xl text-white">Tanvir Hossain</h2>
              <p className="text-white">Founder of Designpro</p>
            </div>
          </div>
        </div>
      </section>
  )
}