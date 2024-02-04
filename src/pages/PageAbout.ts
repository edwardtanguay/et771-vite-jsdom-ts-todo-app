export const PageAbout = () => {
	return /*html*/ `
<section class="pageAbout">
	<h2>purpose of this site</h2>
	<ul>
		<li>to learn how to make <em>interactive applications</em> with plain JavaScript</li>
	</ul>
	<h2>features</h2>
	<ul>
		<li>built with <em>Vite JS-DOM (Vanilla)</em> which provides a modern JavaScript development environment</li>
		<li><em>TypeScript</em> gives you type safety, intellisense, code-completion, protection from publishing bugs, etc.</li>
		<li>a <em>custom router</em> enables you to create component pages and easily add them to the nav bar</li>
		<li>simple <em>state management</em> gives you the ability to change variables and then rerender the entire site, similar to React, Vue.js, Angular, etc.</li>
		<li>full <em>CRUD features</em> which enable user to add, edit and delete todos as well as mark them as completed</li>
		<li><em>responsive design</em> which works well both on a computer screen and smart phone</li>
		<li><em>localStorage</em> automatically saves and loads todos that are created and edited on the site</li>
		<li>an <em>admin page</em> enables you to e.g. turn on debugging and change other config values of the site</li>
		<li><em>Font Awesome icons</em> demonstrate an easy way to implement minimal, styled icons in a JS-DOM site</li>
		<li><em>GitHub repository</em> contains all code for this site which you can clone, learn from, build other sites with</li>
	</ul>
</section>
	`
}