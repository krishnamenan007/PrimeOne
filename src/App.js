import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

<section id="main">
	<h1>Paper-wrapped cups of magic.</h1>
	<nav class="header-links">
		<div class="link-container">
			<a href="#cupcakes">
				<i class="fa fa-cutlery"></i>
				Experience
			</a>
		</div>
		<div class="link-container">
			<a href="#contact">
				<i class="fa fa-phone"></i>
				Get in touch
			</a>
		</div>
	</nav>
</section>

<section id="cupcakes">
	<div class="pie-pick">
		<h2><span>Pick a pie.</span></h2>
		<div class="snoreo">
			<img src="http://www.lulubellescakes.com/wp-content/uploads/2015/12/Oreo-topping.png" style={{width: "95%"}}/>
			<div class="text">
				<h3>Snowreo</h3>
				<p>Evading the dreaded pangs of hunger, a group of cupcake enthusiasts has discovered this new secret delicacy in the remote chocolate-filled world of Oreo.</p>
			</div>
		</div>
		<div class="cloudy-sky">
			<img src="https://s-media-cache-ak0.pinimg.com/originals/a5/d2/30/a5d230b7a0d3e218f0ceec5d8d2451e0.png"/>
			<div class="text">
				<h3>Cloudy Sky</h3>
				<p>Did you ever hear the tale of Cloudy Sky the Delicious? It's a cupcake legend. Cloudy Sky was a cupcake so palpatable that it could influence the heart to create... cravings.</p>
			</div>
		</div>
		<div class="timeless-beauty">
			<img src="https://s-media-cache-ak0.pinimg.com/originals/59/1a/69/591a69127ad53cf4241a3ea6253c9bbe.jpg"/>
			<div class="text">
				<h3>Timeless Beauty</h3>
				<p>The eternal grace of a never-fading lust tempts those who veer too close to this artistic blend of just the right ingredients in just the right amounts.</p>
			</div>
		</div>
		<div class="party-time">
			<img src="http://harvestbakery.com/wp-content/uploads/2016/04/VanillaSprinklesCupCake_clipped_rev_1.png" style={{width: "90%"}}/>
			<div class="text">
				<h3>Party Time</h3>
				<p>Are you well prepared to have a delightful time with your old chums and stuff? This is roughly exactly what you're looking for, I think. Should be good.</p>
			</div>
		</div>
	</div>
</section>

<section id="contact">
	<h1>Contact us</h1>
		<p>Interested in our cupcakes? Or do you just want to have a chat? Fill the form below and we'll get in touch with you.</p>

		<form autocomplete="off">
			<div class="success-message">Your message has been received. We will contact you shortly!</div>
			<div class="input-container" data-placeholder="Name">
				<input type="text" name="name" pattern="^[a-zA-Z\s]*$" required/>
			</div>
			<div class="input-container" data-placeholder="Email" required>
				<input type="email" name="email"/>
			</div>
			<div class="input-container" data-placeholder="Message">
				<textarea name="message" maxlength="500" required></textarea>
			</div>
			<button type="submit"><span>Send</span></button>
		</form>
</section>
  </div>
  );
}

export default App;
