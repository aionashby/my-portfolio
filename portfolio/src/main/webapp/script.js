// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
/**
 * Adda a random greet to the page.
 */
function addRandomFact() {
    const facts = 
        ['My favorite color is blue', 'My favorite animal are dolphins', 'I have two older sisters and a younger brother',
        'I do not like ice cream actually', 'I love watching YouTube and Netflix', 'I played the violin for 10 years'];

    // Pick a random quote.
    const fact = facts[Math.floor(Math.random() * facts.length)];

    // Add fact to the page.
    const factContainer = document.getElementById('fact-container');
    factContainer.innerText = fact;
}
