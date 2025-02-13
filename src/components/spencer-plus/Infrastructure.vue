<template>
  <div class="text-white">
    <h1 class="text-4xl font-bold mb-8">Infrastructure Overview</h1>
    
    <!-- System Architecture Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-secondary">System Architecture</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Core Specifications</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Ubuntu 22.04.1 LTS with custom-tuned kernel</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>AMD Ryzen 5 5500 (12 cores) with 32GB RAM</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Hybrid storage architecture combining NVMe SSD and redundant media pool</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Advanced network segmentation with VLAN support</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Storage Management</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>mergerfs + SnapRAID implementation for redundant storage</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Structured directory hierarchy for configuration and data</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Automated backup strategies with retention policies</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Efficient volume management for Docker containers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Network Architecture Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-secondary">Network Architecture</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">DNS Infrastructure</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Pi-hole + Unbound implementation for local DNS resolution</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Custom DNS resolution chain for optimal routing</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Network-wide ad blocking capabilities</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Local domain management for internal services</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Security Implementation</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>UFW firewall with granular access control</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Cloudflare integration for DDoS protection</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>SSL/TLS with automatic certificate renewal</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Fail2ban with custom rulesets for enhanced security</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Achievement Highlights -->
    <div>
      <h2 class="text-2xl font-bold mb-6 text-secondary">Notable Achievements</h2>
      <div class="bg-gray-800 rounded-lg p-6">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Zero-Downtime Storage Migration</h3>
          <p>Successfully migrated 8.8TB of data while maintaining complete service availability through creative Docker volume management solutions.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Advanced Network Segmentation</h3>
          <p>Implemented sophisticated VLAN configurations and network isolation strategies to optimize traffic flow and enhance security.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>