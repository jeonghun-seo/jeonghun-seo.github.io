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
          <h1 class="cv-name">서정훈 / JeongHun Seo</h1>
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
            <ul class="cv-list">
              <li>
                <strong>Large Language Models</strong><br />
                Instruction tuning, Hallucination analysis, RAG
              </li>
              <li>
                <strong>Recommendation System</strong><br />
                Spatio-Temporal, Context-aware, Next PoI
              </li>
              <li>
                <strong>Graphs & Knowledge</strong><br />
                Graph theory, Knowledge graphs, GNN
              </li>
            </ul>
          </section>
        <section class="cv-card">
            <h2 class="cv-section-title">Education</h2>
            <ul class="cv-list">
                <li>
                    <strong>M.S. in Information and Communication Engineering</strong><br />
                    Chungbuk National University, 2025 -  <br/>
                </li>
                <li>
                    <strong>B.S. in Computer Engineering</strong><br />
                    Korea National University of Transportation, 2019 - 2024 <br/>
                </li>
            </ul>
        </section>
    </section>
</section>
