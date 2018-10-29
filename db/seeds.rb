# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars' }, { name: "Lord of the Rings' }")
#   Character.create(name: "Luke', movie: movies.firs")
# Article.create([{
#   title: "I am an article title",
#   author: 'john doe',
#   url: 'www.nytimes.com',
#   date: "2015-12-0"'
# },
# {
#   title: "I am an article title 2",
#   author: 'jane doe',
#   url: 'www.cnn.com',
#   date: "2015-12-0"'
# },
# {
#   title: "I am an article title 3",
#   author: 'john doe',
#   url: 'www.nytimes.com',
#   date: "2015-12-0"'
# }
# ])
#
Category.create([
  {
    name: "Strategy ",
    description: "Objectives & Needs"
  },
  {
    name: "Management ",
    description: "Specs & Requirements"
  },
  {
    name: "Architecture",
    description: "Structure & Interaction"
  },
  {
    name: "Development",
    description: "Code & Navigation"
  },
  {
    name: "Design",
    description: "Visual & Interactive"
  }
])

Stash.create([
  {
    name: "80/20 rule ",
    category_id: 3,
    description: "The Pareto principle (also known as the 80–20 rule, the law of the vital few, and the principle of factor sparsity) states that, for many events, roughly 80% of the effects come from 20% of the causes."
  },
  {
    name: "AB / Multivariate Testing",
    category_id: 6,
    description: "A technique for testing a hypothesis in which multiple variables are modified. The goal of multivariate testing is to determine which combination of variations performs the best out of all of the possible combinations."
  },
  {
    name: "Accessibility Analysis ",
    category_id: 6,
    description: "A study to measure how the website is easy for everyone to use, regardless of their special needs. It could be done by specific tools, following the W3C guideline or even by an usability test."
  },
  {
    name: "Adaptive Web Design (AWD)",
    category_id: 6,
    description: "Adaptive websites adapt to the width of the browser at a specific points. In other words, the website is only concerned about the browser being a specific width, at which point it adapts the layout."
  },
  {
    name: "Aesthetic-Usability Effect",
    category_id: 7,
    description: "The aesthetic usability effect is where a user will perceive an attractive product as easier to use than an ugly one."
  },
  {
    name: "Affordance",
    category_id: 7,
    description: "A situation where an object’s sensory characteristics intuitively imply its functionality and use."
  },
  {
    name: "Agile",
    category_id: 4,
    description: "Agile software development is a set of principles for software development in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams."
  },
  {
    name: "Anchoring",
    category_id: 7,
    description: "Incorporating a test-driven, semantic, live style guide into your process to establish, enforce, and evolve your design language."
  },
  {
    name: "Atomic Design",
    category_id: 7,
    description: "A methodology for creating design systems."
  },
  {
    name: "Brainstorming",
    category_id: 4,
    description: "Brainstorming is a group creativity technique by which efforts are made to find a conclusion for a specific problem by gathering a list of ideas spontaneously contributed by its members."
  },
  {
    name: "Breadcrumbs",
    category_id: 7,
    description: "An effective visual aid that indicates the location of the user within the website’s hierarchy, making it a great source of contextual information for landing pages."
  },
  {
    name: "Call to Action",
    category_id: 5,
    description: "In marketing, a call to action (CTA) is an instruction to the audience to provoke an immediate response, usually using an imperative verb such as “call now”, “find out more” or “visit a store today”."
  },
  {
    name: "Card Sorting",
    category_id: 3,
    description: "Card sorting is a simple technique in user experience design where a group of subject experts or “users”, however inexperienced with design, are guided to generate a category tree or folksonomy. It is a useful approach for designing information architecture, workflows, menu structure, or web site navigation paths."
  },
  {
    name: "Chunking",
    category_id: 5,
    description: "Chunking is a method of presenting information which splits concepts into small pieces or “chunks” of information to make reading and understanding faster and easier. Chunking is especially useful for material presented on the web because readers tend to scan for specific information on a web page rather than read the page sequentially."
  },
  {
    name: "Cognitive Load",
    category_id: 4,
    description: "The amount of mental processing power needed to use your site, affects how easily users find content and complete tasks."
  },
  {
    name: "Color Theory",
    category_id: 7,
    description: "A body of practical guidance to color mixing and the visual effects of a specific color combination."
  },
  {
    name: "Competitive Analysis",
    category_id: 3,
    description: "Data on what works well or poorly on other sites saves you from implementing useless features and guides UX investments to features that your users need."
  },
  {
    name: "Constraint",
    category_id: 6,
    description: "The concept of constraints in design can be defined as the practice of limiting user actions on a system. Constraints limit the actions that can be performed by the user, thus increasing the usability of the design and reducing the likelihood of operator error."
  },
  {
    name: "Consumer Journey Map",
    category_id: 5,
    description: "A customer journey map tells the story of the customer’s experience: from initial contact, through the process of engagement and into a long-term relationship."
  },
  {
    name: "Content Audit",
    category_id: 4,
    description: "The activity of checking all of the content on a website, and compiling it into a big list."
  },
  {
    name: "Content Strategy",
    category_id: 3,
    description: "Content strategy refers to the planning, development, and management of content—written or in other media. The term is particularly common in web development since the late 1990s. It is a recognized field in user experience design, but also draws interest from adjacent communities such as content management, business analysis, and technical communication."
  },
  {
    name: "Cooperative Principle",
    category_id: 3,
    description: "People relate to computer interactions much like human conversation, so observing normal conversational rules is a useful design tactic."
  },
  {
    name: "Ecosystem Map",
    category_id: 3,
    description: "An ecosystem is the term given to a set of products, services, and people that function together in a symbiotic way."
  },
  {
    name: "Ethnography",
    category_id: 3,
    description: "Ethnographic field research involves the study of groups and people as they go about their everyday lives."
  },
  {
    name: "Eye Tracking",
    category_id: 7,
    description: "Eye-tracking research provides designers with a blueprint of sorts to guide them on the priorities with which site visitors generally absorb the information on any given site."
  },
  {
    name: "Features Roadmap",
    category_id: 4,
    description: "A plan for the future actions of the team. It could be on a spreadsheet, post its or timeline."
  },
  {
    name: "Fitts’ Law",
    category_id: 7,
    description: "This scientific law predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target."
  },
  {
    name: "Five Hat Racks",
    category_id: 5,
    description: "The Five Hat Racks was first developed by Richard Saul Wurman in his book Information Anxiety. In a nutshell, there are 5 ways to organise information: By Location, Alphabet, Time, Category and Continuum."
  },
  {
    name: "Flexibility-Usability Tradeoff",
    category_id: 4,
    description: "The flexibility-usability tradeoff is a design principle maintaining that, as the flexibility of a system increases, its usability decreases. The tradeoff exists because accommodating flexibility requires satisfying a larger set of requirements, which results in complexity and usability compromises"
  },
  {
    name: "Fogg’s Behaviour Model",
    category_id: 3,
    description: "The Fogg Behavior Model shows that three elements must converge at the same moment for a behavior to occur: Motivation, Ability, and Trigger. When a behavior does not occur, at least one of those three elements is missing."
  },
  {
    name: "The Fold",
    category_id: 7,
    description: "What is visible on the page without requiring any action is what encourages us to scroll."
  },
  {
    name: "Gestalt Laws of Design",
    category_id: 7,
    description: "Gestalt principles, or gestalt laws, are rules of the organization of perceptual scenes. When we look at the world, we usually perceive complex scenes composed of many groups of objects on some background, with the objects themselves consisting of parts, which may be composed of smaller parts, etc."
  },
  {
    name: "Graceful Degradation",
    category_id: 6,
    description: "When a site utilizes new technology, if disabled, the content maintains effectiveness for the users."
  },
  {
    name: "Grid",
    category_id: 7,
    description: "In graphic design, a grid is a structure (usually two-dimensional) made up of a series of intersecting straight (vertical, horizontal, and angular) or curved guide lines used to structure content."
  },
  {
    name: "Heuristic Evaluation",
    category_id: 7,
    description: "A usability inspection method for computer software that helps to identify usability problems in the user interface (UI) design. It specifically involves evaluators examining the interface and judging its compliance with recognized usability principles."
  },
  {
    name: "Hick’s Law",
    category_id: 6,
    description: "Hick’s law, or the Hick–Hyman Law, named after British and American psychologists William Edmund Hick and Ray Hyman, describes the time it takes for a person to make a decision as a result of the possible choices he or she has: increasing the number of choices will increase the decision time logarithmically."
  },
  {
    name: "Hook Model",
    category_id: 3,
    description: "A four-step process companies use to hook users and form habits among them. The four parts of the model include: trigger, action, investment and variable reward."
  },
  {
    name: "Information Architecture",
    category_id: 5,
    description: "Information architecture (IA) is the structural design of shared information environments; the art and science of organizing and labelling websites, intranets, online communities and software to support usability and findability."
  },
  {
    name: "Jira",
    category_id: 4,
    description: "Jira is a proprietary issue tracking product, developed by Atlassian. It provides bug tracking, issue tracking, and project management functions."
  },
  {
    name: "Kano Model",
    category_id: 3,
    description: "The Kano model is a theory of product development and customer satisfaction developed in the 1980s by Professor Noriaki Kano, which classifies customer preferences into five categories."
  },
  {
    name: "Key Performance Indicators (KPI)",
    category_id: 3,
    description: "A Key Performance Indicator is a measurable value that demonstrates how effectively a company is achieving key business objectives. Organizations use KPIs at multiple levels to evaluate their success at reaching targets."
  },
  {
    name: "Lean UX",
    category_id: 3,
    description: "Lean UX is a set of principles that may be used to guide you to better, more desirable solutions for users. It’s not a process in which each tool is rigidly applied."
  },
  {
    name: "Legibility vs Readability",
    category_id: 7,
    description: "Users won’t read web content unless the text is clear, the words and sentences are simple, and the information is easy to understand. You can test all of this."
  },
  {
    name: "Mental/Conceptual Models",
    category_id: 7,
    description: "What users believe they know about a UI strongly impacts how they use it. Mismatched mental models are common, especially with designs that try something new."
  },
  {
    name: "Metrics Analysis",
    category_id: 3,
    description: "Web metrics are a treasure trove of UX data and insights. Used properly, metrics are the ultimate behavioral analysis tool; the trick is to know how to read the data and what it means."
  },
  {
    name: "Minimum Viable Product (MVP)",
    category_id: 4,
    description: "In product development, the minimum viable product (MVP) is a product which has just enough features to gather validated learning about the product and its continued development."
  },
  {
    name: "Mobile-First Design",
    category_id: 7,
    description: "The growth of mobile is a huge opportunity to reach more people than ever. By starting mobile first with your responsive website you are able to make the tough decisions about the content. The constraints of the mobile medium force us to focus on what really matters."
  },
  {
    name: "Moodboards",
    category_id: 3,
    description: "A collaborative collection of assets and patterns that will eventually evolve into a product’s visual style guide."
  },
  {
    name: "Occam’s Razor",
    category_id: 5,
    description: "Occam’s Razor, put simply, states: “the simplest solution is almost always the best.” It’s a problem-solving principle arguing that simplicity is better than complexity."
  },
  {
    name: "Omni-channel UX",
    category_id: 3,
    description: "Multichannel sales approach that provides the customer with an integrated shopping experience. The customer can be shopping online from a desktop or mobile device, or by telephone, or in a bricks and mortar store and the experience would be seamless."
  },
  {
    name: "Paper Prototyping",
    category_id: 6,
    description: "Variation of usability testing where representative users perform realistic tasks by interacting with a paper version of the interface that is manipulated by a person ‘playing computer,’ who doesn’t explain how the interface is intended to work."
  },
  {
    name: "Participatory Design",
    category_id: 4,
    description: "Involvement of the stakeholders, designers, researchers and end-users in the design process in order to help ensure that the end product meets the needs of its intended user base."
  },
  {
    name: "Pattern Library",
    category_id: 6,
    description: "A formal way of documenting a solution to a common design problem. The idea was introduced by the architect Christopher Alexander for use in urban planning and building architecture, and has been adapted for various other disciplines, including teaching and pedagogy, development organization and process, and software architecture and design."
  },
  {
    name: "Personas",
    category_id: 3,
    description: "In user-centered design and marketing, personas are fictional characters created to represent the different user types that might use a site, brand, or product in a similar way."
  },
  {
    name: "Presentation",
    category_id: 7,
    description: "Presenting concept designs, presenting research findings, presenting usability testing results or simply giving a knowledgeshare, UXers are frequent presenters. And good presentation skills are very important because if you can’t communicate your ideas, your insights and your designs, they’re simply not going to gain traction."
  },
  {
    name: "Progressive Disclosure",
    category_id: 7,
    description: "Progressive disclosure is an interaction design technique often used in human computer interaction to help maintain the focus of a user’s attention by reducing clutter, confusion, and cognitive workload. This improves usability by presenting only the minimum data required for the task at hand."
  },
  {
    name: "Progressive Enhancement",
    category_id: 6,
    description: "Progressive enhancement is a strategy for web design that emphasizes accessibility, semantic HTML markup, and external stylesheet and scripting technologies."
  },
  {
    name: "Prototypes",
    category_id: 6,
    description: "A simulation of the final product. It’s like an interactive mockup that can have any degree of fidelity. The main purpose of building prototypes is to test whether or not the flow of the product is smooth and consistent."
  },
  {
    name: "Quantitative Survey",
    category_id: 3,
    description: "Questions that provide numbers as result. Quick and inexpensive way of measuring user satisfaction and collecting feedback about the product. It could indicate the need for a deeper qualitative test."
  },
  {
    name: "Rapid Prototyping",
    category_id: 6,
    description: "A cyclycal approach towards design that focuses on quickly creating a functional, interactive prototype of a website or web application."
  },
  {
    name: "Reciprocity",
    category_id: 3,
    description: "Humans tend to return good deeds: use this social psychology law in user interface design to gain users’ trust and motivate engagement with your site or app."
  },
  {
    name: "Recognition over Recall",
    category_id: 7,
    description: "Showing users things they can recognize improves usability over needing to recall items from scratch because the extra context helps users retrieve information from memory."
  },
  {
    name: "Responsive Web Design",
    category_id: 7,
    description: "Responsive web design (RWD) is an approach to web design aimed at crafting sites to provide an optimal viewing and interaction experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from desktop computer monitors to mobile phones)."
  },
  {
    name: "Service Blueprint",
    category_id: 3,
    description: "A map that displays all the touchpoints of the consumer with your brand, as well as the key internal processes involved in it. Useful to visualize the path followed by consumers across multiple channels and how you could improve the flow."
  },
  {
    name: "Signal-to-Noise Ratio",
    category_id: 5,
    description: "Similar to ‘Interference Effects’, this is a measure of how much relevant to irrelevant content you have on a page. More ‘signal’ and less ‘noise’ is better."
  },
  {
    name: "Sitemap",
    category_id: 5,
    description: "A site map (or sitemap) is a list of pages of a web site accessible to crawlers or users. It can be either a document in any form used as a planning tool for Web design, or a Web page that lists the pages on a Web site, typically organized in hierarchical fashion."
  },
  {
    name: "Sketch App",
    category_id: 7,
    description: "Sketch is built for modern graphic designers, and it shows in every fibre of the app. From a flexible workflow with support for Multiple Pages and Artboards."
  },
  {
    name: "Sketches",
    category_id: 5,
    description: "Just like your thoughts and ideas, sketches are in a constant state of flux, evolving and morphing as you reach a potential solution. Don’t think that you have to be able to draw in order to sketch, although having some experience with it does help."
  },
  {
    name: "Skeuomorphism",
    category_id: 7,
    description: "The design concept of making items represented resemble their real-world counterparts. Skeuomorphism is commonly used in many design fields, including user interface (UI) and Web design, architecture, ceramics and interior design."
  },
  {
    name: "Stakeholders Interviews",
    category_id: 3,
    description: "Stakeholder Interviews are conversations an individual conducts with his or her key stakeholder: customers, bosses, subordinates or peers both within and outside the organization. The interviews allow you to step into the shoes of your interviewees and see your role through the eyes of these stakeholders."
  },
  {
    name: "Storyboards",
    category_id: 3,
    description: "A storyboard is a technique for illustrating an interaction between a person and a product (or multiple people and multiple products) in narrative format, which includes a series of drawings, sketches, or pictures and sometimes words that tell a story."
  },
  {
    name: "Style Tiles",
    category_id: 7,
    description: "Style Tiles are a design deliverable consisting of fonts, colors and interface elements that communicate the essence of a visual brand for the web."
  },
  {
    name: "Styleguides",
    category_id: 7,
    description: "A style guide (or manual of style) is a set of standards for the writing and design of documents, either for general use or for a specific publication, organization, or field. (It is often called a style sheet, though that term has other meanings.)"
  },
  {
    name: "Task Analysis",
    category_id: 4,
    description: "Task analysis is a step-by-step analysis of the users’ task, from their perspective."
  },
  {
    name: "Taxonomies",
    category_id: 5,
    description: "An exploration around multiple ways to categorize and structure content and data."
  },
  {
    name: "Think-Aloud Protocol",
    category_id: 3,
    description: "Think-aloud protocol (or thinking aloud; also talk-aloud protocol) is a protocol used to gather data in usability testing in product design and development, in psychology and a range of social sciences (e.g., reading, writing, translation research, decision making, and process tracing)."
  },
  {
    name: "Typography",
    category_id: 7,
    description: "Communication plays a vital role in design. Whether you design websites, mobile apps, or wearable UIs, your creations have to clearly communicate their intent and purpose. And since text does a lot of the heavy lifting in communicating purpose, you need a solid understanding of typography."
  },
  {
    name: "URL-First Design",
    category_id: 5,
    description: "URLs should be designed in the early stages of website development as users must be able to read, guess and edit them, and it helps designers to define site structure."
  },
  {
    name: "Usability",
    category_id: 6,
    description: "Web usability is the ease of use of a website. Some broad goals of usability are the presentation of information and choices in a clear and concise way, a lack of ambiguity and the placement of important items in appropriate areas."
  },
  {
    name: "Usability Testing",
    category_id: 4,
    description: "Usability testing is the best way to understand how real users experience your website or application. Unlike interviews or focus groups that attempt to get users to accurately self-report their own behavior or preferences, a well-designed user test measures actual performance on mission-critical tasks."
  },
  {
    name: "Use Cases and Scenarios",
    category_id: 4,
    description: "List of actions or event steps, typically defining the interactions between a role (known in the Unified Modeling Language as an actor) and a system, to achieve a goal."
  },
  {
    name: "User-Centered Design (UCD)",
    category_id: 3,
    description: "The design is based upon an explicit understanding of users, tasks and environments. Users are involved throughout design and development. The design is driven and refined by user-centered evaluation. The process is iterative."
  },
  {
    name: "User Flow",
    category_id: 4,
    description: "A user flow is a collection of Web pages that define a logical task. It consists of a number of steps that need to be performed in order to complete the task."
  },
  {
    name: "User Interview / Focus Group",
    category_id: 3,
    description: "A panel of people discussing a specific topic or question. Teaches about the users’ feelings, opinions and even language. Useful when the target audience is new or unknown for the team."
  },
  {
    name: "User Stories",
    category_id: 4,
    description: "User stories are part of an agile approach that helps shift the focus from writing about requirements to talking about them. All agile user stories include a written sentence or two and, more importantly, a series of conversations about the desired functionality."
  },
  {
    name: "Value Proposition",
    category_id: 3,
    description: "A value proposition is a promise of value to be delivered and acknowledged and a belief from the customer that value will be delivered and experienced. A value proposition can apply to an entire organization, or parts thereof, or customer accounts, or products or services."
  },
  {
    name: "Visual Weight",
    category_id: 7,
    description: "The notion that design elements have varied weights; that is, some objects, even on a two-dimensional medium, can appear to be heavier than others. Visual weight is a powerful concept that allows us to create visual hierarchy, symmetry, balance, and harmony in designs."
  },
  {
    name: "Web Accessibility",
    category_id: 6,
    description: "Web accessibility refers to the inclusive practice of removing barriers that prevent interaction with, or access to websites, by people with disabilities. When sites are correctly designed, developed and edited, all users have equal access to information and functionality."
  },
  {
    name: "Wireframes",
    category_id: 6,
    description: "A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website."
  }
])
#
#
# Stash.update(
#   [
#     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
#   ],
#   [
#     {
#       category_id: 3
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 5
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 4
#     },
#     {
#       category_id: 3
#     },
#     {
#       category_id: 7
#     },
#     {
#       category_id: 6
#     },
#     {
#       category_id: 6
#     }
#   ]
#   )