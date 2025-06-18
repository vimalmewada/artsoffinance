import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BlogService {
    BLOG_LIST = [
        {
            "id": 1,
            "featuredImage": "assets/images/blog/blog1.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/lokendra-pic.jpg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Learn Stock Market Trading Offline in Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Looking to build a solid career or passive income through trading? Learn Stock Market Trading Offline in Bhopal with Arts Of Finance – the city’s most trusted and SEBI-registered coaching institute."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "At Arts Of Finance, we specialize in providing in-depth and practical stock market education tailored for Indian markets. Our offline training center in Bhopal offers interactive classroom sessions that cover everything from basic concepts to advanced strategies like price action trading, trend analysis, and risk management. Whether you're a complete beginner or someone looking to refine your skills, our modules are designed for real market application."
                },
                {
                    "type": "quote",
                    "text": "The market doesn’t reward intelligence—it rewards discipline, patience, and continuous learning. Consistency is your greatest edge.",
                    "author": "Lokendra Mewada",
                    "role": "Director - Artsoffinance"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "We follow a structured, no-indicator price action approach that helps you understand market movements naturally—without overcomplicating your screen with tools. All sessions are conducted live at our Bhopal institute with real-time charts, case studies, and trade reviews."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "What sets Arts Of Finance apart is our dedication to mentorship. We offer continuous support through doubt-clearing sessions, mock trading reviews, and personalized feedback to every learner. This hands-on approach makes us the best stock market coaching in Bhopal for anyone serious about trading success."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Searches like “best stock market course near me,” “price action trading Bhopal,” and “offline share market classes in Bhopal” frequently lead students to Arts Of Finance—thanks to our result-driven training and student success stories."
                }
            ],
            "tags": [
                "Stock Market Coaching",
                "Trading Institute Bhopal",
                "Price Action Trading",
                "Learn Trading Offline",
                "Stock Market Course Bhopal"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Lokendra Mewada",
                "role": "Director - Artsoffinance",
                "bio": "Lokendra teaches practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and trading psychology makes him one of the most trusted mentors in Central India."
            }
        },
        {
            "id": 2,
            "featuredImage": "assets/images/blog/blog2.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/lokendra-pic.jpg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Why Bhopal Needs Quality Share Market Education",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "As financial literacy grows across India, cities like Bhopal are realizing the urgent need for quality share market education. At Arts Of Finance, we’re addressing this gap with professional, offline training programs designed specifically for aspiring traders and investors in Bhopal."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Our offline stock market courses in Bhopal are curated with a focus on Indian market conditions. We teach you the right mix of price action strategies, technical patterns, market psychology, and money management. From the basics of how stock markets work to advanced intraday setups, every session is led by industry professionals using live market demonstrations."
                },
                {
                    "type": "quote",
                    "text": "In smaller cities like Bhopal, access to quality trading education is the key to bridging the gap between potential and performance.",
                    "author": "Lokendra Mewada",
                    "role": "Director - Artsoffinance"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "We believe that offline mentorship matters more in cities like Bhopal where online distractions are plenty but personal guidance is rare. Our institute offers personalized doubt clearing, market discussions, and one-on-one feedback to ensure that every student not only learns but thrives in the market."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Whether you are a college student looking for a side income, a working professional wanting to invest smartly, or a retiree seeking stable returns—Arts Of Finance is Bhopal’s most reliable place to learn the stock market in Hindi and English. This is not just a course, it's a transformation."
                }
            ],
            "tags": [
                "Share Market Training",
                "Stock Market Course Bhopal",
                "Learn Stock Market in Hindi",
                "Offline Stock Market Coaching",
                "Bhopal Trading Institute"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Lokendra Mewada",
                "role": "Director - Artsoffinance",
                "bio": "Lokendra teaches practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and trading psychology makes him one of the most trusted mentors in Central India."
            }
        },
        {
            "id": 3,
            "featuredImage": "assets/images/blog/blog3.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/lokendra-pic.jpg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Top 5 Reasons to Join a Stock Market Institute in Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "If you're serious about making consistent returns from the stock market, joining a dedicated stock market institute in Bhopal can be a game changer. At Arts Of Finance, we deliver structured offline training programs that help you trade like a professional, not a gambler."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Here are the top 5 reasons why joining a stock market institute in Bhopal like Arts Of Finance is a smart move:\n1. **Expert Guidance** – Learn from SEBI-registered mentors with real trading experience.\n2. **Live Market Training** – Every session involves live charts and Indian market case studies.\n3. **Price Action Focus** – No confusing indicators, just clean price movements explained.\n4. **Personal Mentorship** – Get one-on-one doubt solving, review sessions, and guidance.\n5. **Offline Environment** – No distractions, complete discipline and focused learning environment."
                },
                {
                    "type": "quote",
                    "text": "The fastest way to cut through noise in the stock market is to learn from someone who has already done it with discipline and real strategies.",
                    "author": "Lokendra Mewada",
                    "role": "Director - Artsoffinance"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "The stock market is full of online hype, but real success comes from hands-on experience and focused offline learning. That’s why Arts Of Finance remains the top-rated trading institute in Bhopal. We don’t teach theory—we teach trading as a skill, customized for Indian traders."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Whether you’re looking to become a full-time trader or simply manage your investments better, joining a professional stock market coaching center in Bhopal will give you clarity, confidence, and consistency. Visit Arts Of Finance and take the first step towards smart investing today."
                }
            ],
            "tags": [
                "Stock Market Coaching",
                "Trading Institute Bhopal",
                "Price Action Trading",
                "Learn Trading in Bhopal",
                "Best Stock Market Classes"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Lokendra Mewada",
                "role": "Director - Artsoffinance",
                "bio": "Lokendra teaches practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and trading psychology makes him one of the most trusted mentors in Central India."
            }
        },
        {
            "id": 4,
            "featuredImage": "assets/images/blog/blog4.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/lokendra-pic.jpg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "How to Start Trading in India: Bhopal’s Best Program",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Are you planning to begin your journey in the Indian stock market? Start with Bhopal’s most trusted program at Arts Of Finance. This offline program is perfect for anyone looking to enter trading with real, practical knowledge instead of just theory."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Our trading programs are designed for absolute beginners and intermediate learners who want to build a solid foundation. From understanding candlestick patterns to mastering price action techniques and risk management, we offer a step-by-step curriculum focused on actual market behavior. Classes are held in an offline, distraction-free environment in Bhopal, allowing maximum interaction and learning."
                },
                {
                    "type": "quote",
                    "text": "You don’t need a finance degree to start trading—you need discipline, guidance, and a proven strategy. That’s what we teach every single day.",
                    "author": "Lokendra Mewada",
                    "role": "Director - Artsoffinance"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "With live trading examples, real-time case studies, and continuous mentorship, Arts Of Finance ensures you learn trading the right way. We also provide strategy review sessions, personalized doubt-clearing classes, and regular performance tracking to keep you on the path to profitability."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "If you’re based in Bhopal and want to learn how to trade the Indian stock market effectively, Arts Of Finance is the place to start. Join today and take your first confident step toward financial independence."
                }
            ],
            "tags": [
                "Stock Market Coaching",
                "Trading Institute Bhopal",
                "Learn Trading India",
                "Offline Stock Market Classes",
                "Price Action Trading"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Lokendra Mewada",
                "role": "Director - Artsoffinance",
                "bio": "Lokendra teaches practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and trading psychology makes him one of the most trusted mentors in Central India."
            }
        },
        {
            "id": 5,
            "featuredImage": "assets/images/blog/blog5.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/lokendra-pic.jpg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Master Technical Analysis – Stock Market Coaching Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "If you're serious about trading, mastering technical analysis is essential. At Arts Of Finance, Bhopal, we provide the most structured offline coaching to help you understand and apply technical analysis in real market scenarios."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Our program includes deep training in chart reading, trend identification, support and resistance analysis, candlestick patterns, volume interpretation, and moving averages. Whether you're trading intraday, swing, or positional, you'll gain the tools needed to make data-driven decisions in the stock market."
                },
                {
                    "type": "quote",
                    "text": "Charts don’t lie. Learning to read them is like learning to read the market’s mind. Technical analysis is not prediction—it’s preparation.",
                    "author": "Lokendra Mewada",
                    "role": "Director - Artsoffinance"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "At Arts Of Finance, every concept is taught with live charts and market-relevant examples so you can apply what you learn instantly. Our students get continuous support through revision sessions, Q&A classes, and personalized trading reviews. No prior experience? No problem. We build your confidence from the ground up."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Join Bhopal’s leading stock market coaching institute and become an independent trader with real market skills. Enroll today and unlock the true potential of technical analysis under expert guidance."
                }
            ],
            "tags": [
                "Technical Analysis",
                "Stock Market Coaching",
                "Trading Institute Bhopal",
                "Candlestick Patterns",
                "Price Action Trading"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Lokendra Mewada",
                "role": "Director - Artsoffinance",
                "bio": "Lokendra teaches practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and trading psychology makes him one of the most trusted mentors in Central India."
            }
        },
        {
            "id": 6,
            "featuredImage": "assets/images/blog/blog6.jpg",
            "author": {
                "name": "Taha Rahi",
                "avatar": "assets/img/tahaSir.jpeg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Beginner to Pro: Complete Share Market Course in Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Start your trading journey with zero knowledge and become a confident trader through our Complete Share Market Course in Bhopal. Exclusively at Arts Of Finance, this course covers everything from stock market basics to advanced trading strategies."
                },
                {
                    "type": "quote",
                    "text": "“An investment in knowledge pays the best interest.”",
                    "author": "Taha Rahi",
                    "role": "SEBI-Registered Mentor"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "We simplify concepts like equity, indices, IPOs, derivatives, price action, and risk control. Each level is packed with live chart analysis, practical assignments, and market-oriented case studies."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Whether you are a student, job seeker, or investor, this course is your roadmap from beginner to pro. Join the most complete stock market coaching in Bhopal and turn your curiosity into competence."
                }
            ],
            "tags": [
                "Share Market Course",
                "Beginner to Advanced Trading",
                "Trading Institute Bhopal"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Taha Rahi",
                "role": "SEBI-Registered Mentor",
                "bio": "Taha is a SEBI-registered analyst with years of experience in teaching practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and psychology makes him one of the most trusted trading mentors in Central India."
            }
        },
        {
            "id": 7,
            "featuredImage": "assets/images/blog/blog7.jpg",
            "author": {
                "name": "Lokendra Mewada",
                "avatar": "assets/img/tahaSir.jpeg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Offline vs Online Trading Courses – What Bhopal Learners Prefer",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Online learning is easy—but is it effective? Bhopal’s students increasingly prefer offline trading courses for deeper understanding, focus, and real-time mentorship."
                },
                {
                    "type": "quote",
                    "class": "quote-1",
                    "author": "Taha Rahi",
                    "role": "SEBI-Registered Mentor",
                    "text": "“Tell me and I forget, teach me and I may remember, involve me and I learn.”"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "At Arts Of Finance, our offline classes offer live chart walkthroughs, question-answer rounds, and in-person feedback—making learning more interactive and practical. Unlike pre-recorded content, our mentors are available to guide you in real time."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Offline courses build discipline, focus, and deeper conceptual clarity. That’s why most learners in Bhopal choose structured, classroom-style trading education at Arts Of Finance."
                }
            ],
            "tags": [
                "Offline Trading Course",
                "Stock Market Coaching Bhopal",
                "Live Trading Class"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Taha Rahi",
                "role": "SEBI-Registered Mentor",
                "bio": "Taha Rahi is a SEBI-registered analyst with years of experience in teaching practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and psychology makes him one of the most trusted trading mentors in Central India."
            }
        },
        {
            "id": 8,
            "featuredImage": "assets/images/blog/blog8.jpg",
            "author": {
                "name": "Taha Rahi",
                "avatar": "assets/img/tahaSir.jpeg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "Crack Price Action Strategies with Live Classes in Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Want to trade without confusing indicators? Master pure price action with live classes at Arts Of Finance, Bhopal. Learn how to read market structure, candle psychology, and support-resistance without relying on lagging tools."
                },
                {
                    "type": "quote",
                    "class": "quote-1",
                    "author": "Taha Rahi",
                    "role": "SEBI-Registered Mentor",
                    "text": "“The best traders have no ego. You have to swallow your pride and get out of the losses.”"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Each session includes interactive charts, live case studies, and risk-reward management for real-world application. From breakout trades to reversal setups, we decode price action practically."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Join Central India’s most hands-on trading classroom and upgrade your trading with real-time execution skills. No more theory—only strategy, structure, and results."
                }
            ],
            "tags": [
                "Price Action Course",
                "Trading Without Indicators",
                "Live Trading Bhopal"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Taha Rahi",
                "role": "SEBI-Registered Mentor",
                "bio": "Taha is a SEBI-registered analyst with years of experience in teaching practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and psychology makes him one of the most trusted trading mentors in Central India."
            }
        },
        {
            "id": 9,
            "featuredImage": "assets/images/blog/blog9.jpg",
            "author": {
                "name": "Taha Rahi",
                "avatar": "assets/img/tahaSir.jpeg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "The Future of Trading: Learn in Bhopal from Industry Experts",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "AI tools and algorithms are the future, but human insight and price reading will always remain the foundation of successful trading. Learn the evolving face of the markets from industry mentors at Arts Of Finance, Bhopal."
                },
                {
                    "type": "quote",
                    "class": "quote-1",
                    "author": "Taha Rahi",
                    "role": "SEBI-Registered Mentor",
                    "text": "“In investing, what is comfortable is rarely profitable.”"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Our offline modules blend traditional strategies with modern approaches like data-driven analysis, volume-action setups, and volatility plays—taught by SEBI-registered professionals."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Stay ahead in the trading game by upgrading your skills with structured guidance, smart strategies, and a learning environment trusted by hundreds in Bhopal."
                }
            ],
            "tags": [
                "Future Trading Education",
                "Smart Market Learning",
                "Trading Trends India"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Taha Rahi",
                "role": "SEBI-Registered Mentor",
                "bio": "Taha is a SEBI-registered analyst with years of experience in teaching practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and psychology makes him one of the most trusted trading mentors in Central India."
            }
        },
        {
            "id": 10,
            "featuredImage": "assets/images/blog/blog10.jpg",
            "author": {
                "name": "Taha Rahi",
                "avatar": "assets/img/tahaSir.jpeg"
            },
            "publishDate": "2025-06-15",
            "categories": [
                "Stock Market",
                "Education",
                "Bhopal"
            ],
            "title": "5-Day Live Workshop – Stock Market Basics to Advance in Bhopal",
            "content": [
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Want to build a strong trading foundation in just 5 days? Join our live workshop in Bhopal designed to take you from zero to market-ready using real charts, market structure, and price action."
                },
                {
                    "type": "quote",
                    "class": "quote-1",
                    "author": "Taha Rahi",
                    "role": "SEBI-Registered Mentor",
                    "text": "“You don’t need to be a genius to invest well. But you need discipline, patience, and practice.”"
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "The workshop covers intraday and swing trading, stock selection, entry-exit strategy, and capital management. With live Q&A, personalized mentoring, and revision support, this is not just a course—it’s a trading transformation."
                },
                {
                    "type": "paragraph",
                    "class": "para-1",
                    "text": "Limited seats. Book your slot in Bhopal’s most immersive and practical stock market learning event."
                }
            ],
            "tags": [
                "5-Day Trading Workshop",
                "Stock Market Bootcamp",
                "Trading Course Bhopal"
            ],
            "socialSharing": {
                "facebook": true,
                "pinterest": true,
                "instagram": true,
                "linkedin": true
            },
            "authorBio": {
                "name": "Taha Rahi",
                "role": "SEBI-Registered Mentor",
                "bio": "Taha is a SEBI-registered analyst with years of experience in teaching practical trading strategies to students across Bhopal. His expertise in price action, market behavior, and psychology makes him one of the most trusted trading mentors in Central India."
            }
        }
    ];


    getBlogList(): Observable<any[]> {
        const shuffledList = this.BLOG_LIST
            .map(value => ({ value, sort: Math.random() })) // assign random sort key
            .sort((a, b) => a.sort - b.sort)                // sort by random key
            .map(({ value }) => value);                     // extract the original values

        return of(shuffledList);
    }

    // Get single blog by ID (returns observable)
    getBlogById(id: any): Observable<any | undefined> {
        const blog = this.BLOG_LIST.find(b => b.id == id);
        return of(blog);
    }

    getAllCategories(): Observable<string[]> {
        return of(this.BLOG_LIST).pipe(
            map(posts => {
                const allCategories = posts.flatMap(post => post.categories);
                return [...new Set(allCategories)];
            })
        );
    }

    getLatestBlogs(limit: number = 4): Observable<any[]> {
        return of(this.BLOG_LIST).pipe(
            map(posts => {
                return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit); // Get first 'limit' items
            })
        );
    }

    getRecentPostImages(maxCount: number = 6): Observable<string[]> {
        return this.getLatestBlogs(maxCount).pipe(
            map(posts => posts.map(post => post.featuredImage))
        );
    }

    getAllTags(): Observable<any[]> {
        return of(this.BLOG_LIST).pipe(
            map(posts => {
                const allTages = posts.flatMap(post => post.tags);
                return [...new Set(allTages)];
            })
        );
    }

    getBlogByCategory(category: string): Observable<any[]> {
        return of(this.BLOG_LIST).pipe(
            map(blogs => {
                // Filter blogs that include the specified category
                return blogs.filter(blog =>
                    blog.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
                );
            }),
            catchError(error => {
                console.error('Error filtering by category:', error);
                return of([]); // Return empty array on error
            })
        );
    }



}