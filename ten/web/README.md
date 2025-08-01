# Ten - Drupal Development Project

A comprehensive Drupal 10 development environment with custom modules for
content migration, data processing, and site functionality. This project
serves as a development sandbox featuring various Drupal modules and migration
examples.

## Table of Contents

- [Requirements](#requirements)
- [Recommended Modules](#recommended-modules)
- [Installation](#installation)
- [Configuration](#configuration)
- [Custom Modules](#custom-modules)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Requirements

This project requires the following:

- **PHP 8.1** or higher
- **MariaDB 10.4** or MySQL 8.0+
- **Composer 2.x**
- **Node.js 18** (for theme development)
- **DDEV** (recommended for local development)

### Drupal Core

- **Drupal 10.2** or higher

### Key Dependencies

- Redis (for caching)
- Various contrib modules (see composer.json for complete list)

## Recommended Modules

The following modules enhance the functionality of this project:

- **Admin Toolbar** - Improved administrative interface
- **Devel** - Development helper tools
- **Migrate Plus** - Enhanced migration capabilities
- **Search API** - Advanced search functionality
- **Charts** - Data visualization capabilities

## Installation

### Standard Drupal Installation

1. Clone this repository:
   ```bash
   git clone [repository-url] ten
   cd ten
   ```

2. Install dependencies using Composer:
   ```bash
   composer install
   ```

3. Set up your local environment with DDEV:
   ```bash
   ddev start
   ddev drush site:install
   ```

4. Import configuration:
   ```bash
   ddev drush config:import
   ```

For detailed installation instructions, visit the
[Drupal Installation Guide](https://www.drupal.org/docs/installing-drupal).

### DDEV Development Environment

This project is optimized for DDEV development. All commands should be
prefixed with `ddev`:

```bash
# Clear caches
ddev drush cr

# Run database updates
ddev drush updb

# Import/export configuration
ddev drush config:import
ddev drush config:export
```

## Configuration

### Initial Setup

1. **Database Configuration**: Configure your database settings in
   `web/sites/default/settings.php` or use DDEV's automatic configuration.

2. **Redis Configuration**: Redis is configured for caching. Ensure Redis
   service is running in your DDEV environment.

3. **File Permissions**: Set appropriate file permissions for the `files`
   directory and `settings.php`.

### Custom Module Configuration

Several custom modules require configuration after installation:

- **Dumdum**: Configure migration settings via `/admin/config/dumdum`
- **Ten Data**: Review monument and zipcode data import settings
- **TIC**: Configure custom entity types and permissions

### Development Settings

For development environments, copy `web/sites/example.settings.local.php` to
`web/sites/default/settings.local.php` and uncomment the inclusion in
`settings.php`.

## Custom Modules

This project includes several custom modules:

### Migration Modules

- **dumdum** - Content migration from various sources
- **dwo_dummy** - Complex migration examples with media handling
- **eme_content** - JSON-based content migrations
- **ten_data** - Data migrations for monuments and zipcodes

### Functionality Modules

- **meppie** - Simple block module with JavaScript and CSS
- **tic** - Custom entity type "Thing" implementation
- **dummy_default_content** - Provides default content for testing

## Development

### Code Quality

Run code quality checks using DDEV:

```bash
# Static analysis
ddev phpstan

# Coding standards check
ddev phpcs web/modules/custom

# Auto-fix coding standards
ddev phpcbf web/modules/custom
```

### Testing

Run PHPUnit tests:

```bash
# Run all tests
ddev phpunit

# Run specific module tests
ddev phpunit web/modules/custom/[module-name]
```

### Migration Development

Use migration tools for content import:

```bash
# Show migration status
ddev drush migrate:status

# Run specific migration
ddev drush migrate:import [migration_id]

# Generate test content
ddev drush generate-content
```

## Testing

This project uses PHPUnit for testing with configuration based on Drupal
core's `phpunit.xml.dist`. PHPStan is configured at level 5 for static
analysis.

### Running Tests

```bash
# Run all tests
ddev phpunit

# Run tests for specific module
ddev phpunit web/modules/custom/tic

# Run with coverage (if configured)
ddev phpunit --coverage-html coverage
```

## Troubleshooting

### Common Issues

**Migration Issues**
- Ensure source data files are properly formatted
- Check migration configuration YAML files
- Clear caches between migration runs: `ddev drush cr`

**Permission Errors**
- Verify file permissions on `web/sites/default/files`
- Check database connection settings
- Ensure Redis service is running

**Module Dependencies**
- Run `composer install` to ensure all dependencies are installed
- Check for module compatibility with Drupal 10
- Review and apply any required patches

### Frequently Asked Questions

**Q: How do I add new migration sources?**
A: Create new YAML files in the relevant module's `migrations/` directory
and clear caches.

**Q: Why are some contrib modules not working?**
A: This project uses 87 contrib modules, with 25 lacking Drupal 11 support.
Check module status and available updates.

**Q: How do I customize the theme?**
A: This project uses Olivero as the default theme with Gin for
administration. Custom theming should be done in the `web/themes/custom/`
directory.

## Contributing

When contributing to this project:

1. Follow Drupal coding standards
2. Run code quality checks before submitting
3. Include tests for new functionality
4. Update documentation as needed

## Legal Matters

This project is built on Drupal, which is licensed under the GPL-2.0-or-later
license. See [Drupal's license](core/LICENSE.txt) for details.

Learn about the [Drupal trademark and logo policy](https://www.drupal.com/trademark).

## Links

- [Drupal.org](https://www.drupal.org)
- [Drupal Community](https://www.drupal.org/community)
- [Drupal Documentation](https://www.drupal.org/documentation)
- [Drupal Security](https://www.drupal.org/security)
