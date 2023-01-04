---
layout: '../../layouts/Markdown-Layout.astro'
title: 'ReturnTo Behavior Not Working'
description: ''
section: 'course-issues'
---

If you're failing to get returnTo behavior to work on lesson 519 (even though it has no error message), it's probably because of passport's update.

In past versions, passport would create a session for a guest and then update when they logged in without changing the session id. This creates a security problem since someone can just re-login and have access to your session id. So passport fixed this by changing the session id when you log in. This is a good update, but unfortunately breaks our functionality.

It takes some work to properly re-add the feature in a secure way. However, if you want a quick fix you can add `{ keepSessionInfo: true }` into passport.authenticate options like this:
```js
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', keepSessionInfo: true  }), (req, res) => 
	req.flash('success', 'Welcome back!');

	const redirectUrl = req.session.returnTo || '/campgrounds'
	res.redirect(redirectUrl);
});
```
Keep in mind that this is less secure and you shouldn't do this if you are making a real project.