---
layout: home
---
<script setup>
// Icon
import IconMail from '~icons/mdi/email'
import IconLinkedin from '~icons/mdi/linkedin'
import IconGithub from '~icons/mdi/github'
</script>


<section class="cv-layout">
  <section class="cv-card cv-card-main">
    <div class="cv-header">
      <div class="cv-header-left">
        <div class="cv-avatar">
          <img src="./profile_1.jpg" alt="pic" />
        </div>
        <div>
          <h1 class="cv-name">서 정 훈 / JeongHun Seo</h1>
          <p class="cv-intro">
            M.S. Student, Department of Information and Communication Engineering <br />
            Chungbuk National University
          </p>
          <div>
            <ul class="cv-contact">
              <li>
                <a href="mailto:dev.jhseo@gmail.com"><IconMail /></a>
              </li>
              <li>
                <a href="https://linkedin.com/in/정훈-서-59b7a936a"><IconLinkedin /></a>
              </li>
              <li>
                <a href="https://github.com/jeonghun-seo"><IconGithub /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section class="cv-grid">
        <section class="cv-card">
            <h2 class="cv-section-title">Research Interests</h2>
            <div class="cv-interest">
                <div>
                    <h3>Large Language Models</h3>
                    <p>Instruction tuning, Hallucination analysis, Retrieval-Augmented Generation </p>
                </div>
                <div>
                    <h3>Recommendation System</h3>
                    <p>RAG pipeline design, retrieval quality, hybrid dense–graph retrieval</p>
                </div>
                <div>
                    <h3>Graphs & Knowledge</h3>
                    <p>Graph theory, knowledge graphs, graph-based recommendation and reasoning</p>
                </div>
            </div>
        </section>
        <section class="cv-card">
            <h2 class="cv-section-title">Education</h2>
            <ul class="cv-list">
                <li>
                    <strong>M.S. in Big Data (in progress)</strong><br />
                    Chungbuk National University · YYYY — Present<br />
                    Thesis topic: <em>[to be decided / your tentative topic]</em>
                </li>
                <li>
                    <strong>B.S. in [Your Major]</strong><br />
                    [Your University] · [Years]<br />
                    (Fill in your undergrad info here)
                </li>
            </ul>
        </section>
    </section>
</section>
