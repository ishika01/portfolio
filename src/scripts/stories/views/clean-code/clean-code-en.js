import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Quote } from '@scripts/base/components/quote/quote';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';

export class CleanCodeEN extends Component {
  render() {
    return (
      <StoryViewport>
        <p>
          This is one of the most famous books in the programming universe. Its
          fame seems only not to be bigger than the number of developers that
          still has not read it. Some of them complain about the examples shown
          in the book to be written in Java, wrongly considering the language
          as an obstacle to understand what clean code is. I have also heard
          that clean code would be a utopia, that functions containing
          four or five statements would be reserved for the software
          development Olympus.
        </p>
        <p>
          The book, a few moments, may give excessive attention to not so
          pragmatic details, but much of it shares a pearl of unique
          wisdom. Below, I will highlight the pieces that better describe the
          path that leads to the clean code - in my point of view.
        </p>
        <h2>
          Letter over numbers.
        </h2>
        <Quote
          sourceText="Source"
          sourceHref="https://www.osnews.com/story/19266/wtfsm/">
          The only valid measurement of code quality: WTF/Minute.
        </Quote>
        <p>
          The book introduction gets started with the statement above. It seems to
          anticipate all of what is going to be discussed on the following
          hundreds of pages. Every line of software you change collaborates
          with the story that you write together with your workmates.
          Low-quality software is a sequence of facts impossible to understand.
          A story that makes it no sense. An avalanche of WTF/Minute. To write
          clean code, you need to be more skilled with letters than numbers.
        </p>
        <h2>
          One letter at a time.
        </h2>
        <Quote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803">
          The ratio of time spent reading vs. writing is well over 10:1. We
          are constantly reading old code as part of the effort to write new
          code. [...] You cannot write code if you cannot read the surrounding
          code.  [...] So if you want to go fast, if you want to get done
          quickly, if you  want your code to be easy to write, make it easy to read.
        </Quote>
        <p>
          Communication is a must-have skill to write clean code. Naming a
          variable is communication. Naming files is communication. Grouping
          files into directories is communication.
        </p>
        <p>
          Some time ago, I turned to a friend and said: <em>Do you know what I would
          like to do when I read code like this?</em> He asked me
          back: <em>What? I would like to pass my finger on the screen. It looks
          like Braille, I answered.</em> That file was plenty of single-letter
          variables.
        </p>
        <p>
          Do not be afraid of giving long names to your variables, functions,
          files, and directories. Be sure they have the meaning they need to have.
          One minute invested in a great name can save ten other minutes from
          who needs to understand it. One letter at a time. Never one letter only.
        </p>
        <h2>
          One thing. One single thing. One thing only.
        </h2>
        <p>
          If you can't have your cake and eat it too, why do expect it of code?
          Directories, files, classes, modules, and functions. Everything
          should do one thing only. Everything should have one single responsibility.
          Remember that directory called utils. The first question that
          comes to mind is: <em>If that directory contains the useful stuff, what
          kind of thing would I find inside of the other ones?</em> Utils is not
          only a weird name, but it’s also a great example of something that
          does much more than what it should. It’s a lack of limits.
        </p>
        <p>
          Responsibility requires boundaries. It sets the start and the end.
          It defines what something does and, more importantly, what it does not.
          Usain Bolt became the faster man in history because he
          decided to do one thing well. One single thing. One thing only.
        </p>
        <h2>
          Clean code needs no comments.
        </h2>
        <Quote
          sourceText="Clean Code"
          sourceHref="https://www.thriftbooks.com/w/clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin-series_robert-c-martin/332840/#isbn=0132350882&idiq=10169803">
          The proper use of comments is to compensate for our failure to
          express ourself in code. Note that I used the word failure. I meant it.
          Comments are always failures. We must have them because we cannot
          always figure out how to express ourselves without them, but their
          use is not a cause for celebration.
        </Quote>
        <p>
          The only thing we can be sure about comments is that machines will
          ignore them. Code comments cannot be tested. They can rapidly become
          outdated. Once they get out of date, the only thing we can be sure of
          is that developers will ignore them.
        </p>
        <p>
          If at some point you find yourself writing a comment trying to better
          explain your code, figure out why that code could not explain itself.
          Comments are always an opportunity for improvements. Like clean code,
          this <ExternalLink href="https://youtu.be/wXaC0YvDgIo?t=237">video
          </ExternalLink> also needs no comments.
        </p>
        <h2>
          Edit brilliantly.
        </h2>
        <p>
          <em>Red, Green, Blue</em>. This is an expression related to Test
          Driven Development - <em>TDD</em>. Those three colors represent the
          following development steps:
        </p>
        <ul>
          <li>
            <u>Red</u>: Once you write a test before implementing it, the test
            fails when it runs for the first time.
          </li>
          <li>
            <u>Green</u>: You iterate through the implementation up to the test succeed.
          </li>
          <li>
            <u>Blue</u>: As soon as the test passes, you transform the code
            that only works into a code that works very well.
          </li>
        </ul>
        <p>
          After having a passing test, you have all the safety you need to
          re-read your code and make sure the names you have chosen are still
          making sense. If a couple lines of code can be removed. If the
          implementation could be cleaner. If you don’t hit the submit button
          as soon as you finish writing an email, why would you consider the
          implementation done as soon as it works?
        </p>
        <p>
          About the importance of editing, Jason Fried wrote <ExternalLink href="https://signalvnoise.com/posts/2930-svn-flashback-eureka-were-editors">
          Eureka! We’re editors</ExternalLink>, and Carolyn Cherry noticed it very well:
        </p>
        <p>
          <em>It is  perfectly okay to write garbage as long as you edit brilliantly</em>.
        </p>
      </StoryViewport>
    );
  }
}
