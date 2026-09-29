<#import "template.ftl" as layout>

<@layout.registrationLayout
displayMessage=!messagesPerField.existsError('username','password')
displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??
; section>

    <#if section = "header">

    <#-- CIABOC uses its own branded header -->

    <#elseif section = "form">

        <div class="ciaboc-login-page">

            <!-- =================================================
                 LEFT BRANDING PANEL
                 ================================================= -->

            <section class="ciaboc-brand-panel">

                <div class="ciaboc-brand">

                    <div class="ciaboc-brand-logo">

                        <span class="ciaboc-c-logo">
                            C
                        </span>

                        <span>
                            CIABOC
                        </span>

                    </div>


                    <div class="ciaboc-commission">

                        <div class="ciaboc-commission-icon">
                            ▣
                        </div>

                        <div>
                            2026 Commission to Investigate<br>
                            Allegations of Bribery or<br>
                            Corruption
                        </div>

                    </div>


                    <div class="ciaboc-gold-line"></div>


                    <h1>
                        CIABOC Account
                    </h1>


                    <p>
                        Welcome to your secure declarant &amp;<br>
                        official portal.
                    </p>

                </div>


                <div class="ciaboc-circle ciaboc-circle-top"></div>

                <div class="ciaboc-circle ciaboc-circle-bottom"></div>

            </section>


            <!-- =================================================
                 RIGHT LOGIN PANEL
                 ================================================= -->

            <section class="ciaboc-login-panel">

                <div class="ciaboc-login-card">


                    <!-- LANGUAGE -->

                    <div class="ciaboc-language">

                        <button type="button">
                            සිං
                        </button>

                        <button type="button">
                            த
                        </button>

                        <button type="button"
                                class="active">
                            English
                        </button>

                    </div>


                    <!-- LOGIN -->

                    <div id="kc-form">

                        <div id="kc-form-wrapper">

                            <#if realm.password>

                                <form
                                        id="kc-form-login"
                                        action="${url.loginAction}"
                                        method="post"
                                        onsubmit="login.disabled = true; return true;"
                                >


                                    <!-- USERNAME -->

                                    <#if !usernameHidden??>

                                        <div class="ciaboc-form-group">

                                            <label for="username">

                                                <#if !realm.loginWithEmailAllowed>

                                                    ${msg("username")}

                                                <#elseif !realm.registrationEmailAsUsername>

                                                    ${msg("usernameOrEmail")}

                                                <#else>

                                                    ${msg("email")}

                                                </#if>

                                            </label>


                                            <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    value="${(login.username!'')}"
                                                    autofocus
                                                    autocomplete="username"
                                            />

                                        </div>

                                    </#if>


                                    <!-- PASSWORD -->

                                    <div class="ciaboc-form-group">

                                        <label for="password">
                                            ${msg("password")}
                                        </label>


                                        <div class="ciaboc-password">

                                            <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autocomplete="current-password"
                                            />


                                            <button
                                                    type="button"
                                                    class="ciaboc-eye"
                                                    onclick="togglePassword()"
                                                    aria-label="Show password"
                                            >
                                                👁
                                            </button>

                                        </div>

                                    </div>


                                    <!-- FORGOT PASSWORD -->

                                    <#if realm.resetPasswordAllowed>

                                        <div class="ciaboc-forgot">

                                            <a href="${url.loginResetCredentialsUrl}">
                                                ${msg("doForgotPassword")}
                                            </a>

                                        </div>

                                    </#if>


                                    <!-- SIGN IN -->

                                    <div class="ciaboc-form-buttons">

                                        <input
                                                id="kc-login"
                                                name="login"
                                                type="submit"
                                                value="${msg("doLogIn")}"
                                        />

                                    </div>


                                    <!-- DIVIDER -->

                                    <div class="ciaboc-divider">
                                        <span>OR</span>
                                    </div>


                                    <!-- SOCIAL LOGIN -->

                                    <#if social?? && social.providers?has_content>

                                        <div class="ciaboc-social">

                                            <#list social.providers as p>

                                                <a
                                                        href="${p.loginUrl}"
                                                        class="ciaboc-social-button"
                                                >

                                                    <#if p.alias == "google">

                                                        <span class="social-icon">
                                                            G
                                                        </span>

                                                    <#else>

                                                        <span class="social-icon">
                                                            ▣
                                                        </span>

                                                    </#if>


                                                    <span>
                                                        Continue with ${p.displayName}
                                                    </span>

                                                </a>

                                            </#list>

                                        </div>

                                    </#if>


                                    <!-- REGISTRATION -->

                                    <#if realm.password
                                    && realm.registrationAllowed
                                    && !registrationDisabled??>

                                        <div class="ciaboc-register">

                                            ${msg("noAccount")}

                                            <a href="${url.registrationUrl}">
                                                ${msg("doRegister")}
                                            </a>

                                        </div>

                                    </#if>


                                </form>

                            </#if>

                        </div>

                    </div>

                </div>

            </section>

        </div>


        <!-- PASSWORD TOGGLE -->

        <script>

            function togglePassword() {

                const password =
                    document.getElementById("password");

                if (!password) {
                    return;
                }

                if (password.type === "password") {

                    password.type = "text";

                } else {

                    password.type = "password";

                }

            }

        </script>


    <#elseif section = "info">

    <#-- CIABOC custom layout -->

    </#if>

</@layout.registrationLayout>