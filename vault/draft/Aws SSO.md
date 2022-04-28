


```mermaid

sequenceDiagram
    
    
    Browser->IDP: Username | Password
    IDP->LDAP: Validate
    LDAP->IDP: Credential
    IDP->Browser:SAML Assertion
    Browser->SSO:SAML Assertion
    SSO->STS:Create Token
    SSO->Browser:Redirect 


```

