# GitHub Deployment Guide for Dazyners Academy

This guide provides step-by-step instructions for deploying the Dazyners Academy project to GitHub.

## Prerequisites

1. GitHub account
2. Git installed on your local machine
3. Personal Access Token (PAT) from GitHub

## Setting Up Personal Access Token (PAT)

1. Go to GitHub.com and log in
2. Click your profile picture → Settings
3. Scroll to Developer settings → Personal access tokens → Tokens (classic)
4. Click "Generate new token (classic)"
5. Configure token:
   - Name: "Dazyners Academy Development"
   - Expiration: 90 days (recommended)
   - Scopes: 
     - ✓ repo (all repo permissions)
     - ✓ workflow (if using GitHub Actions)
6. Click "Generate token"
7. **IMPORTANT**: Save the token securely - you won't see it again!

## Initial Repository Setup

1. Initialize Git repository:
   ```bash
   git init
   ```

2. Add remote repository:
   ```bash
   git remote add origin https://github.com/ConnecUs/Dazyners_Academy.git
   ```

3. Verify remote URL:
   ```bash
   git remote -v
   ```

## Deploying Changes

1. Stage all changes:
   ```bash
   git add .
   ```

2. Commit changes:
   ```bash
   git commit -m "Your commit message"
   ```

3. Push to GitHub:
   ```bash
   git push -u origin main
   ```
   When prompted:
   - Username: Your GitHub username
   - Password: Your Personal Access Token

## Troubleshooting

### Permission Denied
If you see "Permission denied" errors:
1. Verify your Personal Access Token has correct permissions
2. Ensure you're using the token as your password
3. Check if the token hasn't expired

### Remote Repository Issues
If push is rejected due to unrelated histories:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Repository URL Update
If repository URL needs updating:
```bash
git remote set-url origin https://github.com/ConnecUs/Dazyners_Academy.git
```

## Best Practices

1. Always pull before pushing changes:
   ```bash
   git pull origin main
   ```

2. Use meaningful commit messages
3. Regularly update your Personal Access Token before expiration
4. Keep your token secure and never commit it to the repository

## Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
