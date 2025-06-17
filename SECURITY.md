# Security Policy for Portfolio Website

## Supported Versions

This portfolio website is a static site with no backend server. Security updates are applied continuously to the main branch.

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| All previous versions | :x: |

## Reporting a Vulnerability

Since this is a static portfolio website with no:
- User authentication
- Database connections
- Server-side processing
- Sensitive data collection

The security surface is extremely limited. However, if you discover any potential security issues:

1. **Email Disclosure**: [lukeponga9@gmail.com](mailto:lukeponga9@gmail.com)
2. **Response Time**: Within 48 hours
3. **Process**:
   - Describe the vulnerability in detail
   - Include steps to reproduce (if applicable)
   - Suggest potential fixes (optional but appreciated)
4. **Expectations**:
   - Acknowledgement within 48 hours
   - Assessment within 3 business days
   - Fix deployment within 7 days if valid

### Types of Vulnerabilities

Please report:
- Cross-site scripting (XSS) vulnerabilities
- Content security policy (CSP) bypasses
- Mixed content issues (HTTP resources on HTTPS page)
- Any potential for injected malicious content

### Out of Scope
- Theoretical vulnerabilities without proof-of-concept
- SEO optimization suggestions
- UI/UX improvements
- Feature requests

## Security Measures

This portfolio implements the following security protections:

1. **Content Security Policy (CSP)**:
   ```http
   Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; frame-src 'none'
   ```

2. **HTTPS Enforcement**:
   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

3. **XSS Protection**:
   ```http
   X-XSS-Protection: 1; mode=block
   ```

4. **Frame Prevention**:
   ```http
   X-Frame-Options: DENY
   ```

5. **Content Type Options**:
   ```http
   X-Content-Type-Options: nosniff
   ```

## Dependency Security

Dependencies are monitored using GitHub's security alerts:

| Dependency              | Version       | Security Status |
|-------------------------|---------------|-----------------|
| Bootstrap               | 5.3.0         | :white_check_mark: |
| Bootstrap Icons         | 1.10.0        | :white_check_mark: |

## Best Practices

1. All external resources are loaded from trusted CDNs (jsdelivr.net)
2. No sensitive information is stored in the repository
3. Regular dependency updates
4. Automated security scanning via GitHub Actions
5. Manual code reviews before deployment

## Updates

Security updates are deployed immediately when vulnerabilities are found in:
- Bootstrap framework
- Any other third-party dependencies
- Browser-specific vulnerabilities affecting site functionality

**Note**: This portfolio contains no backend components, databases, or user authentication systems, significantly reducing its attack surface.
