import "./css/About.css";

const About = () => {
  return (
    <>
      <div style={{paddingTop: window.location.href.includes('about') ? '100px' : '0px'}} className="body">
        <h1 className="font-metropolish text-center">About Me</h1>
      </div>

      <div className="mb-3 card" style={{ maxWidth: "2000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img"
              src="src\components\Assets\pexels-shvets-production-7525176 (1).jpg"
              alt="About Me"
            ></img>
          </div>

          <div className="col-md-5 pos">
            <div className="card-body p-2 ">
              <p className="card-text ">
                Friends love your lemon-chiffon pound cake. Coworkers at the
                office beg you for the recipe for your chocolate cupcakes with
                devil's food swirls and cream cheese icing. At your last family
                reunion, so many people devoured your fruit cakes, even though
                you thought you brought enough to have leftovers for your
                neighbors. Your cake-baking hobby might just be your next
                lucrative foray. Why not make doing what you love into a cake
                business? Whether you have cake business ideas around baking
                birthday cakes, wedding cakes, or everyday cakes for dinner
                parties and special events, your cottage food business can begin
                once you know about your state’s licensing laws, you get your
                cake business logo and website up and running, and you have a
                solid plan for how to start a cake business.
              </p>
              <p className="card-text">
                No pun intended, home-baked cake businesses are on the rise. If
                you peruse Instagram, there’s plenty of inspiration to help you
                get motivated. Say Lee with Flowers, and The Whisking Well are
                some cute names on the platform among thousands if you’re
                looking to name your home-based cake business, too. Now that
                your creative juices are flowing, let's talk about business
                plans for your cake-baking business.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel fermentum nisl. Curabitur id enim ut nisl pharetra iaculis
                eu ac odio. Maecenas tempus, sapien ut laoreet sagittis, mauris
                augue dapibus odio, nec consectetur libero sem vel purus. In hac
                habitasse platea dictumst. Sed in nisi ut tellus commodo cursus.
                Nulla facilisi. Maecenas nec odio nec sem imperdiet dictum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Duis ac ex non lectus viverra laoreet.
                Quisque posuere, justo vitae suscipit auctor, orci ex
                ullamcorper nisl, ut ullamcorper metus nisl vitae elit. Etiam
                condimentum tincidunt erat, vel pellentesque elit rhoncus at.
                Morbi vehicula tortor eu dui congue, id fringilla odio accumsan.
                Nulla facilisi.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel fermentum nisl. Curabitur id enim ut nisl pharetra iaculis
                eu ac odio. Maecenas tempus, sapien ut laoreet sagittis, mauris
                augue dapibus odio, nec consectetur libero sem vel purus. In hac
                habitasse platea dictumst. Sed in nisi ut tellus commodo cursus.
                Nulla facilisi. Maecenas nec odio nec sem imperdiet dictum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Duis ac ex non lectus viverra laoreet.
                Quisque posuere, justo vitae suscipit auctor, orci ex
                ullamcorper nisl, ut ullamcorper metus nisl vitae elit. Etiam
                condimentum tincidunt erat, vel pellentesque elit rhoncus at.
                Morbi vehicula tortor eu dui congue, id fringilla odio accumsan.
                Nulla facilisi.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel fermentum nisl. Curabitur id enim ut nisl pharetra iaculis
                eu ac odio. Maecenas tempus, sapien ut laoreet sagittis, mauris
                augue dapibus odio, nec consectetur libero sem vel purus. In hac
                habitasse platea dictumst. Sed in nisi ut tellus commodo cursus.
                Nulla facilisi. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
