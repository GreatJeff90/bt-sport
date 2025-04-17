"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample data with 5 paragraphs for each blog post
const blogs = [
  {
    title: "How to Spot Unlikely Outcomes",
    excerpt:
      "Learn the psychology and stats behind identifying outcomes the crowd doesn’t expect.",
    content: (
      <>
        <p>
          Spotting unlikely outcomes in betting is an art that combines psychology
          and statistics. It requires a deep understanding of human behavior and how
          it influences decision-making.
        </p>
        <p>
          Most bettors rely on conventional wisdom or trends that have already been
          established. However, truly successful betting comes from recognizing when
          the crowd is wrong and capitalizing on those opportunities.
        </p>
        <p>
          One key psychological aspect to consider is cognitive bias. People tend to
          favor familiar outcomes or those that align with their preconceived notions.
          This is often referred to as the "confirmation bias."
        </p>
        <p>
          Statistically, spotting unlikely outcomes involves recognizing discrepancies
          between the odds and the actual probabilities. By comparing historical data
          with current odds, you can often find value bets that others overlook.
        </p>
        <p>
          Ultimately, spotting unlikely outcomes is about developing a mindset of
          skepticism. Always question the odds and never assume the crowd has it right.
        </p>
      </>
    ),
    author: "John Doe",
    date: "March 12, 2025",
  },
  {
    title: "Maximize Odds Without Risking It All",
    excerpt:
      "A smart strategy guide for making safer reverse bets that still pay off big.",
    content: (
      <>
        <p>
          Maximizing your odds without risking everything is the key to long-term
          success in reverse betting. While the thrill of big payouts is appealing,
          it's important to balance that excitement with caution.
        </p>
        <p>
          One effective strategy is to focus on bets with higher probability but lower
          rewards. These bets are less likely to result in large losses and can build
          your bankroll steadily over time.
        </p>
        <p>
          Another approach is hedging. By placing counter bets, you can ensure that
          your initial bet remains profitable, even if things go wrong. Hedging is
          especially useful for large, high-stakes bets where the potential for loss
          is significant.
        </p>
        <p>
          You should also be mindful of bankroll management. Setting a strict budget
          for your betting activity will prevent you from chasing losses or making
          impulsive decisions that could wipe out your funds.
        </p>
        <p>
          Ultimately, the goal is to make smart bets that keep you in the game. By
          focusing on value and minimizing risk, you can maximize your odds without
          jeopardizing your financial stability.
        </p>
      </>
    ),
    author: "Jane Smith",
    date: "March 18, 2025",
  },
  {
    title: "The Psychology of Risk-Taking",
    excerpt:
      "Dive deep into the psychological factors that drive risk-taking behavior in sports betting.",
    content: (
      <>
        <p>
          Risk-taking is inherent in sports betting, but understanding the psychological
          factors that drive it can help bettors make more informed decisions.
        </p>
        <p>
          The thrill of the gamble often overrides logical thinking, leading bettors to
          take risks they might not otherwise consider. This is known as "loss aversion,"
          where the fear of losing is stronger than the desire to win.
        </p>
        <p>
          Additionally, gamblers often fall prey to "overconfidence bias," where they
          believe they have more control over the outcome than they actually do.
        </p>
        <p>
          To mitigate these biases, bettors should focus on data-driven decisions and
          practice self-discipline to avoid impulsive bets.
        </p>
        <p>
          By understanding the psychology of risk-taking, bettors can make smarter
          choices and increase their chances of success in the long run.
        </p>
      </>
    ),
    author: "Sarah Lee",
    date: "March 22, 2025",
  },
  {
    title: "Understanding Betting Algorithms",
    excerpt:
      "How betting algorithms work and how to use them to your advantage.",
    content: (
      <>
        <p>
          Betting algorithms are powerful tools used by sportsbooks to set odds, but
          they can also be leveraged by bettors to gain an edge.
        </p>
        <p>
          These algorithms analyze vast amounts of data, including player stats, team
          performance, and historical trends, to predict the likely outcome of a sporting
          event. Understanding how these algorithms work can help you identify valuable
          bets that may be overlooked by human bookmakers.
        </p>
        <p>
          One strategy is to look for discrepancies between the algorithm's predictions
          and the odds offered by sportsbooks. If the algorithm favors one outcome but
          the odds suggest otherwise, there may be an opportunity for profit.
        </p>
        <p>
          While betting algorithms are not foolproof, they can be a valuable tool in
          making data-driven decisions and increasing your chances of success.
        </p>
        <p>
          By learning how to use these algorithms to your advantage, you can take your
          betting strategy to the next level.
        </p>
      </>
    ),
    author: "Michael Johnson",
    date: "March 25, 2025",
  },
  {
    title: "The Importance of Bankroll Management",
    excerpt:
      "Why managing your bankroll is crucial to long-term success in sports betting.",
    content: (
      <>
        <p>
          Bankroll management is arguably the most important aspect of sports betting,
          yet it's often overlooked by beginners.
        </p>
        <p>
          Proper bankroll management involves setting a budget for your betting activities
          and sticking to it. This helps prevent large losses and ensures that you can
          keep betting over the long term.
        </p>
        <p>
          One key strategy is to only risk a small percentage of your bankroll on each bet.
          This way, even if you experience a losing streak, you'll still have funds left
          to continue betting.
        </p>
        <p>
          Additionally, bettors should avoid "chasing losses," a common pitfall where they
          bet larger amounts to try to recover from previous losses.
        </p>
        <p>
          By practicing proper bankroll management, you can ensure that your betting
          activities are sustainable and that you’re in it for the long haul.
        </p>
      </>
    ),
    author: "Emily Davis",
    date: "March 28, 2025",
  },
  {
    title: "Advanced Betting Strategies for Professionals",
    excerpt:
      "Explore high-level strategies used by professional bettors to maintain an edge.",
    content: (
      <>
        <p>
          While most bettors stick to basic strategies, professionals use advanced
          techniques to consistently beat the odds and maintain an edge over sportsbooks.
        </p>
        <p>
          One of the most effective strategies is "line shopping," which involves comparing
          the odds across multiple sportsbooks to find the best value for your bet.
        </p>
        <p>
          Another advanced strategy is "arbitrage betting," where you place bets on all
          possible outcomes of an event to guarantee a profit regardless of the result.
        </p>
        <p>
          Professionals also rely on extensive data analysis to identify inefficiencies in
          the market and exploit them before the odds adjust.
        </p>
        <p>
          By studying these advanced strategies, you can elevate your betting game and
          start thinking like a professional.
        </p>
      </>
    ),
    author: "Chris Wilson",
    date: "April 1, 2025",
  },
  {
    title: "The Role of Statistics in Sports Betting",
    excerpt:
      "How to use statistics and data analysis to improve your betting accuracy.",
    content: (
      <>
        <p>
          Statistics play a crucial role in sports betting, helping bettors make informed
          decisions based on hard data rather than intuition or gut feelings.
        </p>
        <p>
          By analyzing past performances, player stats, and team dynamics, bettors can
          identify trends and patterns that suggest the most likely outcomes for upcoming
          events.
        </p>
        <p>
          One key statistical concept to understand is "expected value," which measures
          the long-term profitability of a bet. By focusing on bets with a positive
          expected value, you can increase your chances of making a profit.
        </p>
        <p>
          Additionally, bettors can use statistical models and simulations to predict
          outcomes with greater accuracy, taking into account factors that may not be
          immediately obvious.
        </p>
        <p>
          By integrating statistics into your betting strategy, you can move away from
          guesswork and towards a more systematic, data-driven approach.
        </p>
      </>
    ),
    author: "Laura Garcia",
    date: "April 4, 2025",
  },
  {
    title: "The Evolution of Sports Betting Regulations",
    excerpt:
      "A look at how sports betting laws have changed over time and what it means for bettors.",
    content: (
      <>
        <p>
          Sports betting regulations have evolved significantly over the past few
          decades, with many countries now legalizing and regulating the practice.
        </p>
        <p>
          In the past, betting was often done through illegal or unregulated channels,
          leading to a lack of consumer protection and integrity in the market.
        </p>
        <p>
          Today, however, many jurisdictions have introduced legal frameworks that ensure
          fairness and transparency in betting activities. These regulations also protect
          consumers from fraud and ensure that sportsbooks operate with integrity.
        </p>
        <p>
          As the industry continues to grow, it’s important for bettors to stay informed
          about changing laws and regulations in their region.
        </p>
        <p>
          By understanding the legal landscape, you can ensure that your betting activities
          remain safe, secure, and compliant with the law.
        </p>
      </>
    ),
    author: "David Thompson",
    date: "April 7, 2025",
  },
  {
    title: "The Future of Sports Betting: Trends to Watch",
    excerpt:
      "An exploration of emerging trends that are shaping the future of sports betting.",
    content: (
      <>
        <p>
          The sports betting industry is evolving rapidly, with new trends and technologies
          changing the way people bet on sports.
        </p>
        <p>
          One of the most exciting trends is the rise of in-play betting, which allows bettors
          to place bets on events as they unfold in real time.
        </p>
        <p>
          Another emerging trend is the use of artificial intelligence and machine learning
          to predict outcomes and set odds, making betting more data-driven than ever before.
        </p>
        <p>
          Additionally, the increasing legalization of sports betting in many regions is
          expected to drive further growth and innovation in the industry.
        </p>
        <p>
          As the future of sports betting unfolds, it's important for bettors to stay ahead
          of the curve and keep an eye on these exciting trends.
        </p>
      </>
    ),
    author: "Kevin Harris",
    date: "April 10, 2025",
  },
];


export default function BlogsPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Function to open article
  const openArticle = (blog: any) => {
    setSelectedArticle(blog);
  };

  // Function to close article modal
  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-full h-full text-white px-0 py-20">
      <div className="flex justify-between items-center mb-10 px-6">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="object-contain cursor-pointer"
          />
        </a>

        <Link
          href="/"
          className="text-sm text-blue-300 hover:text-white transition-all bg-blue-900/20 border border-blue-600 px-4 py-1.5 rounded-full shadow-sm hover:shadow-blue-600/40"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-[#f1f1f1] mb-12 text-center"
      >
        📚 BT Sport Blog Library
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-lg transition-all border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => openArticle(blog)}
          >
            <div className="flex items-center gap-2 text-[#0070f3] mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">
                Article #{index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[#f1f1f1] mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
            <span className="text-[#0070f3] font-medium text-sm hover:underline">
              Read More →
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal to display the full article content */}
      {selectedArticle && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          onClick={closeArticle}
        >
          <div
            className="bg-[#1e293b] text-white rounded-xl p-6 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
              <button
                onClick={closeArticle}
                className="text-[#0070f3] font-medium text-sm"
              >
                Close
              </button>
            </div>

            <div className="mb-4 text-sm text-gray-400">
              <p>By {selectedArticle.author}</p>
              <p>Posted on {selectedArticle.date}</p>
            </div>

            {/* Article Content */}
            <div className="space-y-4">
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
